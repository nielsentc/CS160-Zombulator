// http://tinyurl.com/cs160ex20
// Zombulator by Tyler Nielsen
// CS 160 Exercise 20: Collisions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 100;

var population = [];

var zombieCount = 0;
var humanCount = 0;
var fightCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  //print("fight");
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population [i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population [j];

      if (attacker.isTouching(target)) {
        //++fightCount;
        //text("Fight Count" + fightCount, width / 2, height - 200);
        print("Fight! Fight! Fight!");
      }
    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  stroke(0);
  textSize(72);
  textAlign(CENTER);
  text("Zombies: " + zombieCount, width / 2, 100);
  text("Humans: " + humanCount, width / 2, height - 100);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initializeZombie() {
  return {
    humanoidType: "zombie",
    position: createVector(random(0, windowWidth), random(0, 200)),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.position.x += this.speed;
      } else if (direction < 40) {
        this.position.x -= this.speed;
      } else if (direction < 50) {
        this.position.y -= this.speed;
      } else {
        this.position.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.position.x, this.position.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}

function initializeHuman() {
  return {
    humanoidType: "human",
    position: createVector(random(0, windowWidth), random(windowHeight - 200, windowHeight)),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150),
    move: function() {
        var direction = random(0, 100);
        if (direction < 20) {
          this.position.x += this.speed;
        } else if (direction < 40) {
          this.position.x -= this.speed;
        } else if (direction < 60) {
          this.position.y += this.speed;
        } else {
          this.position.y -= this.speed;
        }
      },
    draw: function() {
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}