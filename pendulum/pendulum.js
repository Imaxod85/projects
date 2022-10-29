let w = 500;
let h = 500;

const l = 200;
const m = 10;
let alpha = 45;

const rball = 25;

const g = 9.81;

let dt = 0.1;

let kf=0.2;



let valpha = 0;

function setup() {
  //frameRate(30);
  createCanvas(w,h);
  background(0);

}

let posX = [];
let posY = [];
function draw() {
  let x = l*Math.sin(alpha*Math.PI/180)+w/2;
  let y = l*Math.cos(alpha*Math.PI/180)+h/2;
  posX += [x];
  posY += [y];
  let frott = -kf*valpha;
  background(0);
  stroke(255);
  fill(255,255,255);
  line(w/2, h/2, x, y); //line(w/2, 0, x, y);
  noStroke();
  fill(255,0,0);
  ellipse(x,y,rball,rball);
  valpha-=g/l*alpha*dt - frott*dt;//frottement
  alpha+=valpha;
  //posX+=[x];
  //posY+=[y];
 
  //for (let k = 0;k<posX.length;k++){
    //stroke(255);
    //fill(255,255,255);
    //line(posX[posX.length-2],posY[posY.length-2], posX[posX.length-1], posY[posY.length-1]);
  //}

  //for (let i=0; i<posX.length;i++){
    //fill(255,255,255);
    //stroke(255);
    //line(posX[i]+100, posY[i]+100,posX[i+1]+100,posY[i+1]+100);
  //}
  

}
