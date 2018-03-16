var exports = module.exports = {};

var mswService = require('../services/msw.js');

exports.getSwellForecastForSpot = function (spotId) {
  mswService(spotId, function (forecast) {
    console.log(forecast);
    return forecast;
  });
}

exports.printSwellForecastForSpot = function (spotId) {
  mswService(spotId, function (forecast) {
    forecast.forEach(function (timePeriod) {
      var date = new Date(timePeriod.localTimestamp*1000);

      console.log('');
      console.log('Local Time: ' + date);
      console.log('Swell - Max: ' + timePeriod.swell.absMaxBreakingHeight + timePeriod.swell.unit);
      console.log('Swell - Min: ' + timePeriod.swell.absMinBreakingHeight + timePeriod.swell.unit);
    });
  });
}
