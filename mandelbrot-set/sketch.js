let side = 400;
let scale = 2;
let scaling = scale / (side/2);
let rad = 5; 
let color;
let iterations = 20;

function setup() {
createCanvas(side, side);
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);
    for(let y = 0; y < side; y++){
        for(let x = 0; x < side; x++){
            let c = math.complex((x - side/2) * scaling, (-(y - side/2)) * scaling);
            let z = c;
          // console.log(x, y);
          //  console.log("coordinates : " + z.re, z.im);
            for(let int = 0; int < iterations; int++) {
                if(z.re == Infinity) {
                    break;
                }
                c = math.complex((x - side/2) * scaling, (-(y - side/2)) * scaling);


             // console.log("iteration " + int + " : ", z)
                z = math.evaluate(`(${z.re} + ${z.im}i)^2 + ${c.re} + ${c.im}i`);
            }
            if(Math.sqrt(z.re**2 + z.im**2) < rad) {
      
                color = "#fff";
            } else {
                color = "#000";
                
            }
           // console.log("final : " + z + "\nradius : " + Math.sqrt(z.re**2 + z.im**2) + "\n\n")
            stroke(color);
            rect(x, y, 1, 1);
        }
    }
  }
  function draw() {
    
  }