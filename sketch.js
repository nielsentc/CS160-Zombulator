// Zombulator by Tyler Nielsen

var zombieY = 50;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;
var backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(0, 0, 0);
  zombieColor = color(242, 255, 0);
}

function draw() {
  background(backgroundColor);
  noStroke();
  fill(zombieColor);
  ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV *= zombieDamping;
    // zombieSize *= 0.8;
  }
}
