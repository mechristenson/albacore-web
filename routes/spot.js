var express = require('express');
var request = require('superagent');
var router = express.Router();

var config = require('../config/dev.js');
var secrets = require('../config/secrets.js');

/* GET spot listing. */
router.get('/', function(req, res, next) {
  res.render('spot', { spotId: '280'});
});

module.exports = router;
