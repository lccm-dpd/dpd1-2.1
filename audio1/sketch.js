'use strict';

let carrier;

const _setup = () => {
  const r = 0;
  const g = 255;
  const b = 0;

  createCanvas(windowWidth,windowHeight);

  background(r, g, b);

  carrier = new p5.Oscillator('sine');
  carrier.amp(0);
  carrier.freq(440);
  carrier.start();
};

const _draw = () => {
  if (mouseIsPressed) {
    carrier.amp(0.25);
  } else {
    carrier.amp(0);
  }
};
