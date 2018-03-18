var express = require('express');
var mswService = require('../services/msw.js');
var router = express.Router();

/* GET spot listing. */
router.get('/:id', function(req, res, next) {
  var spotId = parseInt(req.params.id, 10);

  mswService(spotId, function (forecast) {
    res.render('spot', { spotId: spotId,
                         response: JSON.stringify(forecast)});
  });
});

module.exports = router;
