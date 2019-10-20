function setup()  {
	createCanvas(windowWidth, windowHeight, WEBGL);
	zaphod = loadImage("sphere.png");
}
let r = 0;
let g = 0;
let b = 0;
setInterval(function() {
	r = abs(r + random(-1, 1));
	g = abs(g + random(-1, 1));
	b = abs(b + random(-1, 1));
}, 1000);
function draw() {
  background(r, g ,b);
  texture(zaphod);
  rotateY(map(mouseX, 0, windowWidth,-1,1));
  rotateX(map(mouseY, 0, windowHeight, 1,-1));
  sphere(100);
}
