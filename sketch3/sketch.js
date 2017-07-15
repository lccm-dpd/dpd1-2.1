'use strict';

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {

  const millis = Date.now();

  // x / y : x divided by y
  // x % y : remainder from dividing x by y
  // e.g 17 % 5 === 2
  // Officially called 'modulo'
  // Why do you think we're performing the calculations below?
  // Try changing them!

  fill(millis % 256, millis/2 % 256, millis/3 % 256);

  ellipse(mouseX, mouseY, 30, 30);
}
