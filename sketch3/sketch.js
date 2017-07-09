'use strict';

const _setup = () => {
  frameRate(30);
  createCanvas(windowWidth,windowHeight);
};

const _draw = () => {

  const millis = Date.now();

  fill(millis % 256, millis/2 % 256, millis/3 % 256);

  ellipse(mouseX, mouseY, 30, 30);
};





