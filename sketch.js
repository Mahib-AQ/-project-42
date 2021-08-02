var hr, mn, sc
var hrAngle, mnAngle, scAngle

function setup() {
  
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  
  background(0);  

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 60, 0, 360);

  push();
  translate(400,200);
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  translate(400,200);
  rotate(mnAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  push();
  translate(400,200);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(3);
  line(0,0,100,0);
  pop();

  drawSprites();
}