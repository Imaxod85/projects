let w = 800;
let h = 800;

let step = 10;
function setup() {
  createCanvas(w,h);
  background(0);
  

}


// function dr(posX,posY){
//   stroke(255,0,0);
//   line(posX[posX.length-1], posY[posY.length-1],posX[posX.length-2], posY[posY.length-2]);
// };

let direction = [-step,step,0];


let x = w/2;
let y = h/2;

let posX = [x];
let posY = [y];


function draw() {
  //background(0);
  //ellipse(x,y,25,25);
  
  x+=direction[Math.floor(Math.random()*direction.length)];
  y+=direction[Math.floor(Math.random()*direction.length)];
  //fill(255,0,0);
  //ellipse(x,y,20,20);
  posX.push(x);
  posY.push(y);
  stroke(255,0,0);
  line(posX[posX.length-1], posY[posY.length-1],posX[posX.length-2], posY[posY.length-2]);
  //for (let i = 0; i<posX.length;i++){
    //for(let j = 0; j<posY.length; j++){
      
    //}
  //}
  

}
