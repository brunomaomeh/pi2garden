import five from 'johnny-five'
import Raspi from 'raspi-io'

var board = new five.Board({
  io: new Raspi()
});

export default class Garden {
  on(uptime) {
    var led = new five.Led("P1-13");
    led.write(1);
	  setTimeout(function() {
	    led.write(0);
    }, uptime);
  }

  off() {
    var led = new five.Led("P1-13");
    led.write(0);
  }
}
