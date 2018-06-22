var express = require('express');
var mswService = require('../services/msw.js');
var router = express.Router();

/* GET spot listing. */
router.get('/:id', function(req, res, next) {
  var spotId = parseInt(req.params.id, 10);

  mswService(spotId, function (forecast) {
    res.render('spot', { spotId: spotId,
                         spotName: "El Porto",
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
                         windDirection: forecast[0].wind.compassDirection});
                         // response: JSON.stringify(forecast)});
  });
});

module.exports = router;
