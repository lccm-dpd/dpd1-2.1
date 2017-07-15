'use strict';

function setup() {

  createCanvas(windowWidth,windowHeight);

  const pink = color(255, 102, 204);
  const green = color(0,  190, 50);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height/5; y++) {
      set(x, y, pink);
    }
  }

  for (let x = 0; x < width; x++) {
    for (let y = 2 * height / 3 ; y < height; y++) {
      set(x, y, green);
    }
  }

  updatePixels();
}

function draw() {
  // empty for now
}





