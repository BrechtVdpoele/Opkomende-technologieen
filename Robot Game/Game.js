let robot1;
let butter1;
let breedte = 1000;
let hoogte = 1000;
let achtergrond;
let distance = 0;
let score = 0;

let geluid1;

function preload() {
  achtergrond = loadImage('Media/cartoon-network-portal.png');
  geluid1 = loadSound('Media/Butter.mp3');
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  robot1 = new Robot();
  butter1 = new Butter();
  achtergrond.resize(windowWidth-10, windowHeight-10);
}

function draw() {
  background(achtergrond);
  push();
  rect(20, 20, 200, 50, 5);
  textSize(40);
  text("Score: " + score, 35, 58);
  if(score == 10){
    if (geluid1.isPlaying()){
        geluid1.stop();
    }
    geluid1.play();
    score = 0
}
  push();
  strokeWeight(5);
  butter1.show();
  butter1.update();
  pop();

  push();
  robot1.show();
  robot1.update();
  pop();
}
