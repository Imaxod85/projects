let a0 = Number(prompt("choose an intial angle : "));
let v0 = Number(prompt("choose an initial velocity : "));


const h = 500;
const w = 1800;

let rball=20;
let x = rball;
let y=h-100;
let vx = v0*Math.cos(a0*Math.PI/180);
let vy = -v0*Math.sin(a0*Math.PI/180);
let ay = 9.81;

function setup() {
  
  frameRate(10)
  createCanvas(w,h);
  background(0);

}


function draw() {
  
  fill(255,0,0);
  ellipse(x,y,rball,rball);
  vy+=ay;
  x+=vx;
  y+=vy;
  
  
  

}
