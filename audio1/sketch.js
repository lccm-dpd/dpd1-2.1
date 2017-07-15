'use strict';

const oscillator = new p5.Oscillator('sine');
let audible = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  background('blue');

  oscillator.amp(0);
  oscillator.freq(440);
  oscillator.start();
}

function draw() {
  if (!audible && mouseIsPressed) {
    background('green');
    oscillator.amp(0.25);
    audible = true;
  } else if (audible && !mouseIsPressed) {
    background('blue');
    oscillator.amp(0);
    audible = false;
  }
}
