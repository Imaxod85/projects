let rad = 400;
function setup() {
  createCanvas(2*rad,2*rad);
  //background(0);
  //frameRate(1);

}
//diviser en 12 parts un angle -> 360/12(0, 360/12, 2*360/12)

//pi|180
//x | deg -> x = pi*deg/180
let i = 1;
let mult = 1;
//let ang = 1;
function draw() {
  background(0);
  stroke(500);
  noFill();
  stroke(0); //0,0,255
  ellipse(rad,rad,2*rad,2*rad);
  translate(rad,rad);
  rotate(-PI/2.0);


  
    //trop stylé
  let ang = 250;//200 stylé  //ang = 378 et a = 28 trop stylé sa mère
  /*
  let a = 3;
  let b = 600;
  let x1 = rad*cos(i*360/ang * Math.PI/180);
  let y1 = rad*sin(i*360/ang * Math.PI/180);
  let x2 = rad*cos((a*i%ang)*360/ang * Math.PI/180);
  let y2 = rad*sin((a*i%ang)*360/ang * Math.PI/180);
  line(x1,y1, x2,y2);
  i++;
  //a+=0.2;
  
  //Pour cette façon de faire il faudra enlever le background de draw et le mettre dans setup.
  
 */
  
  
  
  
  
  

  
  
   
  // mettre le background dans draw
   
   for (let bb = 1; bb<200; bb++){
     let x1 = rad*cos(bb*360/ang * Math.PI/180);
     let y1 = rad*sin(bb*360/ang * Math.PI/180);
     let x2 = rad*cos((mult*bb%ang)*360/ang * Math.PI/180);
     let y2 = rad*sin((mult*bb%ang)*360/ang * Math.PI/180);
     stroke(50,255,50);
     line(x1,y1, x2,y2);
    
    }
    mult+=0.01;
    
    document.getElementById("myText").innerHTML = parseFloat(mult).toFixed(2);//mult
  
  


}
