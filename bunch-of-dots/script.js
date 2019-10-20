var galaxy = {
  x: 100,
  y: 50
};
var col = {
	r: 0,
  g: 0,
  b: 0,
  a: 0,
  black: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight);  
	 col.black = random(0, 10);
  background(col.black);
}

function draw() {

  col.r = random(0, 0);
  col.g = random(0, 255);
  col.b = random(0, 200);
  col.a = random(0, 255);
  galaxy.x = random(0, width);
  galaxy.y = random(0, width);
	fill(col.r, col.g, col.b, col.a);
  noStroke();
  ellipse(galaxy.x, galaxy.y, 1, 1);
  ellipse(mouseX, mouseY, 1, 1);
}
