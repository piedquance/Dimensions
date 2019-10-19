let side = 800;
let scale = 2;
let scaling = scale / (side/2);
let rad = 5; 
let color;
let iterations = 20;
let k = 0;
let h = 1;

function setup() {
createCanvas(side, side);
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);
    for(let y = 0; y < side; y++){
        for(let x = 0; x < side; x++){
            let c = [(x - side/2) * scaling - h, (-(y - side/2)) * scaling - k];
            let z = c;

            for(let int = 0; int < iterations; int++) {
                if(z[0] == Infinity) {
                    break;
                }
                c = [(x - side/2) * scaling - h, (-(y - side/2)) * scaling - k];

                z[0] = z[0]**2 - z[1]**2 + c[0];
                z[1] = 2 * z[0] * z[1] + c[1];

            }
            if(Math.sqrt(z[0]**2 + z[1]**2) < rad) {
      
                color = "#fff";
            } else {
                color = "#000";
            }
            stroke(color);
            rect(x, y, 1, 1);
        }
    }
  }
  function draw() {
    
  }