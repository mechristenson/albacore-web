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
      renderSpot(forecast, spotId, "Cache", res)
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
          primarySwellHeight: forecast[0].swell.components.primary.height,
          primarySwellPeriod: forecast[0].swell.components.primary.period,
          primarySwellDirection: forecast[0].swell.components.primary.compassDirection,
          secondarySwellHeight: forecast[0].swell.components.secondary.height,
          secondarySwellPeriod: forecast[0].swell.components.secondary.period,
          secondarySwellDirection: forecast[0].swell.components.secondary.compassDirection,
          windUnits: forecast[0].wind.unit,
          windSpeed: forecast[0].wind.speed,
          windDirection: forecast[0].wind.compassDirection
        }

        db.forecast.create(body).then(function(forecast) {
          renderSpot(forecast, spotId, "Web API", res)
        }, function(e) {
          res.status(400).json(e);
        });
      });
    }
  }, function(e) {
    res.status(500).send();
  });
});

function renderSpot (forecast, spotId, name, res) {
  res.render('spot', { spotId: spotId,
    spotName: name,
    timestamp: forecast.timestamp,
    swellUnits: forecast.swellUnits,
    minSwellHeight: forecast.minSwellHeight,
    maxSwellHeight: forecast.maxSwellHeight,
    primarySwellHeight: forecast.primarySwellHeight,
    primarySwellPeriod: forecast.primarySwellPeriod,
    primarySwellDirection: forecast.primarySwellDirection,
    secondarySwellHeight: forecast.secondarySwellHeight,
    secondarySwellPeriod: forecast.secondarySwellPeriod,
    secondarySwellDirection: forecast.secondarySwellDirection,
    windUnits: forecast.windUnits,
    windSpeed: forecast.windSpeed,
    windDirection: forecast.windDirection
  });
};

module.exports = router;
