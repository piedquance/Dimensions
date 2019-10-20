let side = 800;
let scale = 1.5;
let scaling = scale * 2 /side;
let rad = 2; 
let iterations = 100;
let k = 0;
let h = -0.5;
let itr = [];
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
                    int = iterations + 1; } }
            (Math.sqrt(z[iterations - 2]**2 + z[iterations - 1]**2) < rad) ? color = 0 : color = (itr[x + side/2][y + side/2] * 500 / iterations); 
            stroke(color);
            rect(x + side/2, y + side/2, 1, 1); } } }

            window.addEventListener("load", () => { document.getElementById('canvas').appendChild(document.getElementById('defaultCanvas0' ) ) });