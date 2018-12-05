var express = require('express');
var _ = require('underscore');

var mswService = require('../services/msw.js');
var router = express.Router();
var db = require('../db.js')

/* GET spot listing. */
router.get('/:id', function(req, res, next) {
  var spotId = parseInt(req.params.id, 10);

  db.forecast.findOne({
    where: {
      spotId: spotId
    }
  }).then(function(forecast) {
    if (!!forecast) {
      // Found in DB
      res.render('spot', { spotId: spotId,
                            spotName: "Cache",
                            timestamp: forecast.timestamp,
                            swellUnits: forecast.swellUnits,
                            minSwellHeight: forecast.minSwellHeight,
                            maxSwellHeight: forecast.maxSwellHeight
      });
    } else {
      // Not in DB, call service and save
      mswService(spotId, function (forecast) {
        var body = {
          spotId: spotId,
          spotName: "Web API",
          timestamp: new Date(forecast[0].timestamp*1000),
          swellUnits: forecast[0].swell.unit,
          minSwellHeight: forecast[0].swell.minBreakingHeight,
          maxSwellHeight: forecast[0].swell.maxBreakingHeight,
        }

        db.forecast.create(body).then(function(forecast) {
          res.render('spot', { spotId: spotId,
            spotName: "Web API",
            timestamp: forecast.timestamp,
            swellUnits: forecast.swellUnits,
            minSwellHeight: forecast.minSwellHeight,
            maxSwellHeight: forecast.maxSwellHeight
          });
        }, function(e) {
          res.status(400).json(e);
        });
      });
    }
  }, function(e) {
    res.status(500).send();
  });
});

module.exports = router;
