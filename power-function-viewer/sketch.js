let zoom = 3;
let deg = 2;
let size = 200;
let h = size;
let k = size;
let hh = 0;
let kk = 0;
let bb = 1;
let aa = 1;
function setup() {
  createCanvas(size*2, size*2);
}
function draw() {
  zoom = document.querySelector("#zoom").value;
  deg = document.querySelector("#deg").value;
  hh = document.querySelector("#h").value;
  kk = zoom*2 - Number(document.querySelector("#k").value);
  bb = document.querySelector("#b").value;
  aa = document.querySelector("#a").value;
  clear();
  fill('#555');
  rect(0, 0, width, height);
  stroke('#aaa');
  line(width/2, 0, width/2, width);
  line(0, width/2, width, width/2, );
  stroke('#aaa');
  noFill();
  beginShape();
  for(var x = -h; x <= width; x+=1) {
    xx = x/(width/(zoom*2));
    let y = kk - (aa * ((bb * (xx - hh))**deg));
     vertex(xx*(width/(zoom*2)) + h, y*(width/(zoom*2)) - k);
   }
   endShape();
  }
