// http://tinyurl.com/cs160ex13
// Zombulator by Tyler Nielsen
// CS 160 Exercise 13: Intro to arrays

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;
const NUMBER_OF_ZOMBIES = 10;
const NUMBER_OF_HUMANS = 10;

var zombieXs;
var zombieYs;
var zombieSizes;
var zombieColors;

var humanXs;
var humanYs;
var humanSizes;
var humanColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
}

function initializeZombies() {
  zombieXs = [];
  zombieYs = [];
  zombieSizes = [];
  zombieColors = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombieXs[i] = random(0, windowWidth);
    zombieYs[i] = random(0, 200);
    zombieSizes[i] = random(MIN_SIZE, MAX_SIZE);
    zombieColors[i] = color(random(200, 255), random(50, 100), random(50, 100), 150);
  }
}

function initializeHumans() {
  humanXs = [];
  humanYs = [];
  humanSizes = [];
  humanColors = [];
  for (var l = 0; l < NUMBER_OF_HUMANS; ++l) {
    humanXs[l] = random(0, windowWidth);
    humanYs[l] = random(windowHeight - 200, windowHeight);
    humanSizes[l] = random(MIN_SIZE, MAX_SIZE);
    humanColors[l] = color(random(50, 255), random(50, 255), random(50, 255), 150);
  }
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    fill(zombieColors[i]);
    ellipse(zombieXs[i], zombieYs[i], zombieSizes[i], zombieSizes[i]);
  }
}

function drawHumans() {
  for (var l = 0; l < NUMBER_OF_HUMANS; ++l) {
    fill(humanColors[l]);
    ellipse(humanXs[l], humanYs[l], humanSizes[l], humanSizes[l]);
  }
}