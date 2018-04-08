import five from 'johnny-five'

export default class Garden {
  constructor(name) {
    this.led = new five.Led("P1-13");
  }

  on(uptime) {
    this.led.write(1);
    console.log("garden turned on!");
	  setTimeout(function() {
	    this.off()
    }, uptime);
  }

  off() {
    this.led.write(0);
    console.log("garden turned off!");
  }
}
