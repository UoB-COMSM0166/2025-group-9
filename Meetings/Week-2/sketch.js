function setup() {
  createCanvas(510, 550);
  background(500, 200, 200 );// a baby pink 
  textSize(15);
  fill(100); 
  textStyle (BOLDITALIC);
  text("Draw here!",200,35);
  text("p to paint, s to spray paint, r to draw a rainbow line, e to erase",34,50);
  
}

function draw() {
   if(mouseIsPressed){
    noStroke();
    fill(500, 0, 500);// a shade of purple
    ellipse(mouseX, mouseY, 10, 10);  
  }
  if(keyIsPressed){
    if(key === 'p'){
      fill(500, 0, 500);
      ellipse(mouseX, mouseY, 10, 10);
}
    if(keyIsPressed){
    if(key === 'r'){
      strokeWeight(10);
      stroke (random(100,255), random(100, 255), random(100, 255), 300);
      line (pmouseX, pmouseY, mouseX, mouseY);
}
    if(key === 's'){
    for (n = 0; n < 5; n++) {
      fill(500, 0, 500);
      ellipse( 
        mouseX + random (-10, 10),
        mouseY + random (-10, 10),
        1 + random(4),
        1 + random(4)
      );
    }
  }
    if(key ==='e'){
     fill(500, 200,200);
      noStroke();
    ellipse(mouseX, mouseY, 50, 50);  
      
    }
    }
  }
}