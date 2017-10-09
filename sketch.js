// Zombulator by Tyler Nielsen

var zombieY = 50;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;

var humanY = 500;
var humanV = 0;
var humanA = -0.2;
var humanDamping = -0.5;
var humanSize = 80;
var humanColor;

var backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(0, 0, 0);
  zombieColor = color(0, 255, 242);
  humanColor = color(242, 255, 0);
}

function draw() {
  background(backgroundColor);
  noStroke();

  fill(zombieColor);
  ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
  fill(humanColor);
  ellipse(windowWidth / 2, humanY, humanSize, humanSize);

  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV *= zombieDamping;
    // zombieSize *= 0.8;
  }


  humanY += humanV;
  humanV += humanA;
  if (humanY - (humanSize / 2) <= 0) {
    humanY = 0 + (humanSize / 2);
    humanV *= humanDamping;
  }
}
