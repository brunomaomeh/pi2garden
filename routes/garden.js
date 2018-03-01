var express = require('express');
var router = express.Router();

var Garden = require('../src/controller/Garden')

router.get('/on', function(req, res, next) {
  var uptime = req.query.uptime;
  var garden = new Garden();
  console.log('fooo')
  if (uptime) {
    garden.on(uptime);
    res.json({
      status: 'on'
    });
  } else {
    res.json({
      status: 'off'
    })  
  }
});

router.get('/off', function(req, res, next) {
  var garden = new Garden()
  garden.off()
  res.json({
    status: 'off'
  })
});

module.exports = router;
