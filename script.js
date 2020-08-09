function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);  
}

function draw() {
    myCanvas = createCanvas(windowWidth, windowHeight, WEBGL); 
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);;
    fill(173,220,202,100);
		stroke(173, 220, 202);
    box(windowWidth * 0.3);

  }
