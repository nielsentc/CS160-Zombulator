// Zombulator by Tyler Nielsen
// CS 160 Final

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 500;

var population = [];

var zombieCount = 0;
var humanCount = 0;

var costanza;
var meat;

function preload() {
  //costanza = loadImage("https://i.imgur.com/tG8Adl7.png");
  //meat = loadImage("https://i.imgur.com/BPOCpmc.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(20, 20, 20);
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
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        print("Fight! Fight! Fight!");
        fight(attacker, target);
      } //else if (attacker.isHunting(target)) {

      // }
    }
  }
}

function fight(a, t){
  print("It's a fight!");
  if (a.size >= t.size) {
    if (a.humanoidType == "zombie") {
      print("Attacking Z wins");
      t.turn();
    } else {
      print("Attacking H wins");
      t.kill();
    }
  } else {
    if (t.humanoidType == "zombie") {
      print("Target Z wins");
      a.turn();
    } else {
      print("Target H wins");
      a.kill();
    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie(i);
      ++zombieCount;
    } else {
      population[i] = initializeHuman(i);
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  stroke(0);
  textSize(50);
  textAlign(CENTER);
  color(255, 255, 102, 100);
  text("Zombies: " + zombieCount, 200, 100);
  text("Humans: " + humanCount, width - 200, height - 100);
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

function initializeZombie(location) {
  return {
    humanoidType: "zombie",
    health: 1,
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(173, 255), random(255, 255), random(0, 47), 200),
    move: function() {
      if (this.health != 0) {
        var direction = random(0, 100);
        if (direction < 20) {
         this.x += this.speed;
        } else if (direction < 40) {
          this.x -= this.speed;
        } else if (direction < 60) {
         this.y -= this.speed;
        } else {
         this.y += this.speed;
       }
      }
    },
    draw: function() {
      if (this.health != 0) {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
      } else {
        new Image(meat, this.x, this.y, this.size, this.size);
      }
    },
    isTouching: function(target) {
      if (this.health != 0) {
        if (this.humanoidType == target.humanoidType || target.health == 0) return false;
        var distance = dist(this.x, this.y, target.x, target.y);
        return distance <= (this.size/2 + target.size/2);
      }
    },
    kill: function() {
      //population.splice(i, 1);
      this.health = 0;
      //this.x = -1000;
      //this.y = -1000;
      zombieCount--;
    }
  };
}

function initializeHuman() {
  return {
    humanoidType: "human",
    health: 1,
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(200, 255), random(130, 175), random(0, 30), 200),
    Zcolor: color(random(173, 255), random(255, 255), random(0, 47), 200),
    move: function() {
        var direction = random(0, 100);
        if (direction < 20) {
          this.x += this.speed;
        } else if (direction < 40) {
          this.x -= this.speed;
        } else if (direction < 60) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      },
    draw: function() {
      if (this.health != 0) {  
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
      } else {
        fill(this.Zcolor);
        ellipse(this.x, this.y, this.size, this.size);
      }
    },
    isTouching: function(target) {
      if (this.health != 0) { 
        if (this.humanoidType == target.humanoidType || target.health == 0) return false;
        var distance = dist(this.x, this.y, target.x, target.y);
        return distance <= (this.size/2 + target.size/2);
      } else {
        // if (this.humanoidType != target.humanoidType || target.health == 0) return false;
        // var distance = dist(this.x, this.y, target.x, target.y);
        // return distance <= (this.size/2 + target.size/2);
      }
    },
    turn: function() {
      this.health = 0;
      this.color = color(random(173, 255), random(255, 255), random(0, 47), 200);
      humanCount--;
      zombieCount++;
    }
  };
}