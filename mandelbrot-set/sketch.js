let side = 800;
let scale = 1.5;
let scaling = scale / (side/2);
let rad = 5; 
let color;
let iterations = 200;
let k = 0.3;
let h = -0.5;
function setup() {
createCanvas(side, side);
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);

    for(let x = -side/2; x < side/2; x++){
        for(let y = side/2; y > -side/2; y--){  

            const c = [(x * scaling) + h, y * scaling + k];
            let z = [(x * scaling) + h, y * scaling + k];

            for(let int = 0; int < iterations; int = int + 2) {
                z[int+2] = ( z[int] * z[int] ) - ( z[int + 1] * z[int + 1] ) + c[0];
                z[int+3] = ( 2 * z[int] * z[int + 1] ) + c[1]; }

            if(Math.sqrt(z[iterations - 2]**2 + z[iterations - 1]**2) < rad) {
                color = "#fff";} 
            else {
                color = "#000"; }
            stroke(color);
            rect(x + side/2, y + side/2, 1, 1); } } }