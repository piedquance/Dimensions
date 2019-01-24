
let a = 2;
let wi = 1;
let b = 200;
let h = b;
let k = b;
function setup() {
  createCanvas(b*2, b*2);
}
function draw() {
  a = document.querySelector("#aa").value;
  clear();
  stroke(100);
  line(width/2, 0, width/2, width);
  line(0, width/2, width, width/2, );
  fill(0, 10);
  rect(0, 0, width, height);
  stroke(0);
  noFill();
  beginShape();
  for(var x = -h; x <= width; x+=wi) {
    xx = x/(width/4);
    let y = 4 - xx ** a;
     vertex(xx*(width/4) + h, y*(width/4) - k);
   }
   endShape();
  }
function keyPressed() {
  if (keyCode === 65) a = (a*10 + 1)/10;
  else if (keyCode === 68) a = (a*10 - 1)/10;
}
