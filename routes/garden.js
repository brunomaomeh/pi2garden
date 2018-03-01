import express from 'express'
import Garden from '../src/controller/Garden'

// var express = require('express');
// var Garden = require('../src/controller/Garden')

var router = express.Router();

router.get('/on', function(req, res, next) {
  console.log('request /on')

  var uptime = req.query.uptime;
  var garden = new Garden();
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
