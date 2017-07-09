'use strict';

let savedFrameRate = 0;

const debug = () => {
  const currentFrameRate = frameRate();
  if (Math.abs(currentFrameRate - savedFrameRate) > 2) {
    textSize(32);
    fill(0);
    rect(0,0,120,40);
    fill(120);
    text(`r: ${Math.floor(frameRate())}`, 20, 38);
  }
  savedFrameRate = currentFrameRate;
};

const _preload = () => {

};

const _setup = () => {
  const r = 0;
  const g = 0;
  const b = 0;

  createCanvas(windowWidth,windowHeight);

  background(r, g, b);
};

const _draw = () => {

  debug();

  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(255, 255, 255);
  }
  ellipse(mouseX, mouseY, 30, 30);
};





