var y = 0.001;
var x = 0.001;


function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);  
 // myCanvas.parent('body');
 // background(0);
}


function draw() {
    myCanvas = createCanvas(windowWidth, windowHeight, WEBGL); 
    background(0);
    rotateX(x);
    rotateY(y);
    fill(0,255,100,100);
		stroke(5);
    box(windowWidth * 0.3);
    x += random(0.001, 0.005);
    y += random(0.001, 0.005);
  }
