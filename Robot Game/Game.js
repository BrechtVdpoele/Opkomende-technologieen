
let robot1;
let butter1;
let breedte = 1000;
let hoogte = 1000;
let achtergrond;
let distance = 0;
let score = 0;
let geluid;
let bugs = [];
let weatherData;
let temperature;
let show = false;

function preload() {
  achtergrond = loadImage('Media/cartoon-network-portal.png');
  geluid = loadSound('Media/Butter.mp3');
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  achtergrond.resize(windowWidth-10, windowHeight-10);
  loadJSON('https://worldtimeapi.org/api/ip', gotWeatherData);
  robot1 = new Robot();
  butter1 = new Butter();
  for (let i = 0; i < 366; i++) {
    bugs.push(new Jitter());
  }
  
}

function gotWeatherData(data) {
  weatherData = data;
}

function draw() {
  background(achtergrond);

  if (weatherData) {
      temperature = weatherData.day_of_year;
    } else {
      temperature = 0;
    }

  //-----------------------------------Bubbels
  for (let i = 0; i < temperature; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  push();

  //-----------------------------------Score en geluid
  rect(20, 20, 200, 50, 5);
  rect(415,20,1250,50,5)
  textSize(40);
  text("We zijn vandaag de " + temperature+"e dag van het jaar, dus er zijn "+ temperature+" bubbels!",430, 58)
  text("Score: " + score, 35, 58);
  
  if(score == 20){
    if (geluid.isPlaying()){
        geluid.stop();
    }
    geluid.play();
    score = 0;
    textSize(80);
    show = true
  }

  if (show == true){
    textSize(400);
    text('BUTTER!',windowWidth/2 -850,windowHeight/2 )
    if (score == 1){
      show = false
    }
  } 


  push();
  
  //-----------------------------------Boter
  butter1.show();
  butter1.update();
  pop();

  push();

  //-----------------------------------Robot
  robot1.show();
  robot1.update();
  pop();
  
}