// Zombulator by Tyler Nielsen

var zombieX = 50;
var zombie2X = 80;
var xMax = 1000;
var xMin = 0;
var speed1 = 5;
var size = 80;

function setup() {
  createCanvas(xMax, 1000);
}

function draw() {
  background(255, 255, 255);
  fill(random(255), random(255), random(255));
  strokeWeight(4);
  ellipse(zombieX, 50, 80, 80);
  fill(150, 150, 200);
  ellipse(200, 100, 80, 80);
  zombieX = zombieX + speed1;
  
  if(zombieX >= xMax || zombieX <= xMin) {
    zombieX = -1 * zombieX;
//    speed1 = speed1 + 5;
//    size = size + 20;
  }
  if(zombie2X >= xMin) {
    zombie2X = 0;
  }

}
