let size = 801;

function setup() {
createCanvas(size, size);
  }
  function draw() {
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);
    stroke("#fff");
    line(0, size/2, size, size/2);
    line(size/2, 0, size/2, size);
  }