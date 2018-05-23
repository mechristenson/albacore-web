var express = require('express');
var mswService = require('../services/msw.js');
var router = express.Router();

/* GET spots listing. */
router.get('/', function(req, res, next) {
  mswService(280, function (forecast) {
    res.render('spots', { spotId: 280,
                         spotName: "El Porto",
                         response: JSON.stringify(forecast)});
  });
});

module.exports = router;
