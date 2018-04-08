import five from 'johnny-five';

const board = new five.Board({
  io: new Raspi()
});

const relay = new five.Relay({
  type: "NA",
  pit: 17
});

relay.off();

export default relay
