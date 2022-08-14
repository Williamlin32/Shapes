var r;
var angle, angle2;
function setup() {
  createCanvas(900, 400);
  r = width/18;
  angle = 19 * PI/18;
  angle2 = PI -0.15;
  
   background(220);
  //The seperation lines
  strokeWeight(1)
  stroke(0)
  line (width/3, 0, width/3, height)
  line(2 *width/3, 0, 2 * width/3, height)
  line(0, height/2, width, height/2)
  
 //1st part
  //The horizontal parallel lines
  for (var y = 0; y < height/2; y = y +5){
    strokeWeight(3)
    stroke(255, 0, 0)
    line(0, y, width/3, y)
     stroke(0,0,255)
    line(0,y+2.5,width/3,y+2.5)
  }
  
  //The middle part with verticle lines inside
   noStroke()
  fill(0,0,255)
  circle(width/6,height/4, 2* r)
  
  for(var i = 19 * PI/18; i >= 0 ;i = i - 0.075){
    x =width/6 + r * cos(angle);
    y = height/4 +r * sin(angle);
    var x2 =width/6 + r * cos(angle2);
    var y2 = height/4  +r * sin(angle2);
    strokeWeight(1)
    stroke(255,255,0)
    line(x2,y2, x,y);
    angle = angle + 0.075;
    angle2 = angle2 - 0.075;
    
  }
  
  //Second part
  for (y = 0; y < height/2; y = y +5){
    strokeWeight(3)
    stroke(255, 255, 0)
    line(width/3, y, 2*width/3, y)
     stroke(255,0,0)
    line(width/3,y+2.5,2 *width/3,y+2.5)
  }
  noStroke()
  fill(200,200,0)
  square(4/9 * width,height /8, width/9)
  for (x = 4/9 * width; x <= 5/9 * width; x = x + 2.5){
    strokeWeight(1)
    stroke(0, 0, 255)
    line(x, height/8, x, height/8 + width/9)
  }
  
  //Third part
   for (y = 0; y < height/2; y = y +5){
    strokeWeight(3)
    stroke(0, 0, 255)
    line(2* width/3, y, width, y)
     stroke(255,255,0)
    line(2 * width/3 ,y+2.5,width,y+2.5)
  }
  //shape inside 
  noStroke()

  fill(255,255,0)
  triangle(5/6 * width,height/8 ,7/9 * width, 3 * height/8, 8 * width/9, 3 * height/8)
  
  //lines inside shapes
    y = 3 * height/8 
   for (x = 7* width/9; x <= 5 * width/6; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 0, 0)
    line(x, y, x, 3 * height/8)
     y = y - 5;
  }
  y = height/8
  for (x = 5 * width/6; x < 8 * width/9; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 0, 0)
    line(x, y, x, 3 * height/8)
     y = y + 5;
  }
  
  //Fourth part
 for (y = height/2; y < height; y = y + 5){
    strokeWeight(3)
    stroke(255, 0, 0)
    line(0, y, width/3, y)
     stroke(255,255,0)
    line(0,y+2.5,width/3,y+2.5)
  }
  
  //inside of fourth part
  noStroke();
  rect(2 * width/15,5 * height/8, width/15, height/4)
  for (x = 2 * width/15; x <= width/5; x = x + 2.5){
    strokeWeight(1)
    stroke(0, 0, 255)
    line(x,5 * height/8 , x, 7 * height/8)  
  }
  
  //fifth part
  for (y = height/2; y < height; y = y +5){
    strokeWeight(3)
    stroke(255, 255, 0)
    line(width/3, y, 2 * width/3, y)
     stroke(0,0,255)
    line(width/3,y+2.5,2 * width/3 ,y+2.5)
  }
  
  //shape of 5th part
  noStroke();
  fill(0,0,255);
  quad(17 * width/36, 5 * height/8, 4 * width /9, 7 * height/8, 5 * width/9, 7 * height/8, 19 * width/36, 5 * height/8)
  //lines inside the shapes
  //lines for first triangle 
  y = 7 * height/8;
  for (x = 4 * width/9; x <= 17 * width/36; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 0, 0)
    line(x, y, x, 7 * height/8)
     y = y - 10;
  }
  //lines for square
  for (x = 17 * width/36; x <= 19 * width/36; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 0, 0)
    line(x, 5 * height/8, x, 7 * height/8)
  }
  //lines for second triangle
 y = 5 * height/8
  for (x = 19 * width/36; x < 5 * width/9; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 0, 0)
    line(x, y, x, 7 * height/8)
     y = y + 10;
  }
  
   //sixth part 
  for (y = height/2; y < height; y = y +5){
    strokeWeight(3)
    stroke(0, 0, 255)
    line(2 * width/3, y, width, y)
     stroke(255,0,0)
    line(2 * width/3,y+2.5,width,y+2.5)
  }
  //shape inside
  noStroke();
  fill(0,0,255);
  quad(29 * width/36 ,5 * height/8, 7 * width/9, 7 * height/8, 8 * width/9, 7 * height/8, 11 * width/12, 5 * height/8)
  //lines for triangle
    y = 7 * height/8;
  for (x = 7 * width/9; x <= 29 * width/36; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 255, 0)
    line(x, y, x, 7 * height/8)
     y = y - 10;
  }
  //lines for square
  for (x = 29 * width/36; x <= 8 * width/9; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 255, 0)
    line(x, 5 * height/8, x, 7 * height/8)
  }
  
   y = 7 * height/8;
  for (x = 8 * width/9; x <= 11 * width/12; x = x + 2.5){
    strokeWeight(1)
    stroke(255, 255, 0)
    line(x, y, x, 5 * height/8)
     y = y - 10;
  }
  
  
}

function draw() {
 
}