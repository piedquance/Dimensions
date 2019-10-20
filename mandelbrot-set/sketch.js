let side = 800;
let scale = 1.5;
let scaling = scale / (side/2);
let rad = 2; 
const smallItr = (itr, arr) => itr % (arr.length)
let iterations = 100;
let k = 0;
let h = -0.5;
let itr = new Array(side, side);
function setup() {
createCanvas(side, side);
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);

    for(let x = -side/2; x < side/2; x++){
        itr[x + side/2] = [];
        for(let y = side/2; y > -side/2; y--){  
            const c = [(x * scaling) + h, y * scaling + k];
            let z = [(x * scaling) + h, y * scaling + k];
            itr[x + side/2][y + side/2] = 0;
            for(let int = 0; int < iterations; int = int + 2) {
                z[int+2] = ( z[int] * z[int] ) - ( z[int + 1] * z[int + 1] ) + c[0];
                z[int+3] = ( 2 * z[int] * z[int + 1] ) + c[1]; 
                if(Math.sqrt(z[int + 2]**2 + z[int + 3]**2) > rad) {
                    itr[x + side/2][y + side/2] = int; 
                 //   console.log(int)
                    int = iterations + 1;
                       } }
            if(Math.sqrt(z[iterations - 2]**2 + z[iterations - 1]**2) < rad) {
                color = 0} 
            else {
                color = (itr[x + side/2][y + side/2] * 500 / iterations); 
        //    console.log(itr[x + side/2][y + side/2]) 
    }
            stroke(color);
            rect(x + side/2, y + side/2, 1, 1); } } }


            window.addEventListener("load", function(){
                document.getElementById('canvas').appendChild(document.getElementById('defaultCanvas0'))
            });

