'use strict';

function setup() {
  const r = 0;
  const g = 0;
  const b = 0;

  createCanvas(windowWidth,windowHeight);

  background(r, g, b);
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 0, 0);
  } else {
    fill(255, 255, 255);
  }
  ellipse(mouseX, mouseY, 30, 30);
}





