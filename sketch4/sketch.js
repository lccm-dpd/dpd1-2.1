'use strict';


const FRAME_RATE = 30;
const TRAIL_PERSISTENCE_SECONDS = 5;
const TRAIL_SIZE = FRAME_RATE * TRAIL_PERSISTENCE_SECONDS;
const SHRINKAGE = (TRAIL_SIZE - 5) / TRAIL_SIZE;
const ORIGINAL_DIAMETER = 30;

const trail = [];

// p5.js - setup
function setup() {
  frameRate(FRAME_RATE);
  createCanvas(windowWidth,windowHeight);
}

// p5.js - draw
function draw() {

  background('black');

  drawTrail();

  const fillColour = currentColour();
  drawCurrent(fillColour);

  if (mouseIsPressed) {
    addToTrail(mouseX, mouseY, fillColour);
  }
}

// Application functions

function drawTrail() {
  if (trail.length === TRAIL_SIZE) {
    trail.pop();
  }

  trail.forEach(t => {
    t.diameter = t.diameter * SHRINKAGE;
    circle(t.x, t.y, t.diameter, t.fillColour);
  });
}

function currentColour() {
  const currentTimeInMilliseconds = Date.now();
  return color(currentTimeInMilliseconds % 256, currentTimeInMilliseconds / 2 % 256, currentTimeInMilliseconds / 3 % 256);
}

function drawCurrent(fillColour) {
  circle(mouseX, mouseY, ORIGINAL_DIAMETER, fillColour);
}

function addToTrail(x, y, fillColour) {
  trail.unshift({
    x: x,
    y: y,
    diameter: ORIGINAL_DIAMETER,
    fillColour: fillColour
  });
}

function circle(x, y, diameter, colour) {
  fill(colour);
  ellipse(x, y, diameter, diameter);
}
