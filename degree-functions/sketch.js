let a = 1;
let wi = 0.5;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  if(keyIsDown(65)) a+=0.01;
  if(keyIsDown(68)) a-=0.01;
  clear();
  fill(0, 10);
  rect(0, 0, width, height);
  noStroke();
  fill(0);
  for(var x = 0; x <= width; x+=wi) {
    let y = 400 - x ** a;
     rect(x, y, wi, wi);
   }
  }
