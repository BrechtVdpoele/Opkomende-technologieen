
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
  textSize(40);
  text("Score: " + score, 35, 58);
  if(score == 5){
    if (geluid.isPlaying()){
        geluid.stop();
    }
  }
  if (score == 6){
  geluid.play();
  score = 0;
  push();
  }
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