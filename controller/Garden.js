var five = require("johnny-five");
var Raspi = require("raspi-io");

var board = new five.Board({
	  io: new Raspi()
});

board.on("ready", function() {
	console.log("Ligou!");
});

class Garden {
  on() {
    var led = new five.Led("P1-13");
    led.write(1);
    console.log('on');
  }

  off() {
    var led = new five.Led("P1-13");
    led.write(0);
    console.log("Iniciou!");
  }
}

module.exports = Garden;