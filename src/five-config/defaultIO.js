import five from 'johnny-five'

export default class DefaultIO {
  constructor() {
    this.relay = new five.Relay({
      type: "NA",
      pit: 17
    });
  }

  on() {
    this.relay.on();
    console.log("garden turned on!");
  }

  off() {
    this.relay.off();
    console.log("garden turned off!");
  }
}
