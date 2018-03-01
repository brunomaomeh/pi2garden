//import five from 'johnny-five'
//import Raspi from 'raspi-io'

var five = require('johnny-five')
var Raspi = require('raspi-io')

var board = new five.Board({
  io: new Raspi()
});

class Garden {
  // board = new five.Board({
	//   io: new Raspi()
  // });

  on(uptime) {
    console.log('garden on!!!')
  
    var led = new five.Led("P1-13");
    led.write(1);
    console.log('on');
	  setTimeout(function() {
	    led.write(0);
    }, uptime);
  }

  off() {
    var led = new five.Led("P1-13");
    led.write(0);
    console.log("Iniciou!");
  }
}

module.exports = Garden;
