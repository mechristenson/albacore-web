var mswService = require('../services/msw.js');

mswService(2677, function (forecast) {
  forecast.forEach(function (timePeriod) {

    var date = new Date(timePeriod.localTimestamp*1000);

    console.log('');
    console.log('Local Time: ' + date);
    console.log('Swell - Max: ' + timePeriod.swell.absMaxBreakingHeight + timePeriod.swell.unit);
    console.log('Swell - Min: ' + timePeriod.swell.absMinBreakingHeight + timePeriod.swell.unit);
  });
});
