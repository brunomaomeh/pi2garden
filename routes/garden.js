var express = require('express');
var router = express.Router();

var Garden = require('../controller/Garden')

router.get('/on', function(req, res, next) {
  let garden = new Garden()
  garden.on()
  res.json({
    status: 'on'
  })
});

router.get('/off', function(req, res, next) {
  let garden = new Garden()
  garden.off()
  res.json({
    status: 'off'
  })
});

module.exports = router;
