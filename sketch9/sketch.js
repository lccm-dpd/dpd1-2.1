'use strict';

let savedFrameRate = 0;

function debug() {
  const currentFrameRate = frameRate();
  if (Math.abs(currentFrameRate - savedFrameRate) > 2) {
    textSize(32);
    fill(0);
    rect(0,0,120,40);
    fill(120);
    text(`r: ${Math.floor(frameRate())}`, 20, 38);
  }
  savedFrameRate = currentFrameRate;
}

function setup() {
  const r = 0;
  const g = 0;
  const b = 0;

  createCanvas(windowWidth,windowHeight);

  background(r, g, b);
}

function draw() {

  debug();

  if (mouseIsPressed) {
    fill('red');
  } else {
    fill('white');
  }

  ellipse(mouseX, mouseY, 30, 30);
}
