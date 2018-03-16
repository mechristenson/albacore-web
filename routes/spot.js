var express = require('express');
var request = require('superagent');
var router = express.Router();

var mswController = require('../controllers/msw.js');

/* GET spot listing. */
router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id, 10);
  var forecast = mswController.getSwellForecastForSpot(id);

  res.render('spot', { spotId: id,
                       response: forecast});
});

module.exports = router;
