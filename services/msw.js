var request = require('request');

var config = require('../config/dev.js');
var secrets = require('../config/secrets.js');

module.exports = function (spotId, callback) {
  request({
    url: config.msw.host + secrets.msw.apiKey + config.msw.forecastPath + spotId,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback();
    } else {
      callback(body);
    }
  });
}
