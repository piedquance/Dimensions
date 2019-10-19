let size = 201;
const SIZE = (size - 1) / 4;
let rad = 5;
let color;
let iterations = 100;

function setup() {
createCanvas(size, size);
fill('#000');
    stroke("#000");
    rect(0, 0, width, height);
    stroke("#fff");
    line(0, size/2, size, size/2);
    line(size/2, 0, size/2, size);
    for(let y = 0; y < size; y++){
        for(let x = 0; x < size; x++){
            let c = math.complex((x - SIZE) / SIZE, (y - SIZE) * -1 / SIZE);
            let z = c;
          // console.log(x, y);
          //  console.log("coordinates : " + z.re, z.im);
            for(let int = 0; int < iterations; int++) {
                if(z.im == Infinity) {
                    break;
                }
                c = math.complex((x - SIZE) / SIZE, (y - SIZE) * -1 / SIZE);


             // console.log("iteration " + int + " : ", z)
                z = math.evaluate(`${z.re}^2 + ${z.im}i^2 + ${c.re} + ${c.im}i`);
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