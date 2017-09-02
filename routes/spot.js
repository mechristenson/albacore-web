var express = require('express');
var router = express.Router();

/* GET spot listing. */
router.get('/', function(req, res, next) {
  res.send('Spot');
});

module.exports = router;
