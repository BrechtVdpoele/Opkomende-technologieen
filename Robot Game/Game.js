let robot1
let butter1
let breedte = 1000;
let hoogte = 1000;
let img;
let distance = 0;
let score = 0;

function preload() {
  img = loadImage('Media/cartoon-network-portal.png');
 
}

function setup(){
  createCanvas(windowWidth - 4.5,windowHeight - 4.5); 
  robot1= new Robot();
  butter1= new Butter();
  img.resize(windowWidth,windowHeight);
}

function draw(){
  image(img, 0, 0, width,height, 0,0, img.width,img.height, CONTAIN, LEFT); //achtergrond herladen
//Boter inladen
  
  push()
  rect(20,20,200,50, 5)
  textSize(40);
  text("Score:",35,58)
  push()
  strokeWeight(5)
  butter1.show();
  butter1.update();
  distance = dist(mouseX, mouseY, butter1.locationX, butter1.locationY)     
  }

  if(distance < 100){
    score = score + 1;
    text(score, 100,200)  

  pop()
//Robot inladen
  push()
  robot1.show();      
  robot1.update();
  pop()

 
}
