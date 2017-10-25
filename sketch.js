// http://tinyurl.com/cs160ex16
// Zombulator by Tyler Nielsen & Viv Burson
// CS 160 Exercise 16: Biased Random Walk

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;
var humans;

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
  moveHumans();
}


// Zombies. Raaahh!

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombies[index] = {
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150)
  };
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    drawZombie(zombies[i]);
  }
}

function drawZombie(zombie) {
  fill(zombie.color);
  ellipse(zombie.x, zombie.y, zombie.size, zombie.size);
}


// Humans. Mmmm brains!

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}

function initializeHuman(index) {
  humans[index] = {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150)
  };
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    drawHuman(humans[i]); // TODO
  }
}

function drawHuman(human) { // TODO
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
}

function moveHumans() {
  // bllllllaaaarrrgggghhh!
  // Hint: loop
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    moveHuman(humans[i]);
  }
}

function moveHuman(human) {
  // wlllllaaaaaauuuugggghhhhh!
  direction = random(0, 3);
  if (human.direction == 0) {
    moveLeft();
  } else if (human.direction == 1) {
    moveRight();
  } else if (human.direction == 2) {
    moveUp();
  } else if (human.direction == 3) {
    moveDown();
  }
}

funtion moveLeft() {
  
}

funtion moveRight() {
  
}

funtion moveUp() {
  
}

funtion moveDown() {
  
}