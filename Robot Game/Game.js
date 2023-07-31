let robot1;           // Variabelen
let butter1;          // |
let breedte = 1000;   // |
let hoogte = 1000;    // |
let achtergrond;      // |
let distance = 0;     // |
let score = 0;        // |
let bubble = [];      // |
let timeData;         // |
let geluid1;          // |

function preload() {
  achtergrond = loadImage('Media/cartoon-network-portal.png');    // Achtergrond inladen
  geluid1 = loadSound('Media/Butter.mp3');                        // Geluid inladen
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);              // Weergavegrootte aanpassen aan afmetingen scherm
  loadJSON('https://worldtimeapi.org/api/ip',gotTimeData);        // Tijd van een afzonderlijke website halen
  achtergrond.resize(windowWidth-10, windowHeight-10);            // Achtergrondgrootte aanpassen aan afmetingen scherm

  robot1 = new Robot();             // Robot inladen
  butter1 = new Butter();           // Boter inladen
  for (let i = 0; i < 50; i++) {    // 50 random bubbels inladen
    bubble.push(new Jitter());
  }
  
}

function draw() {
  background(achtergrond);          // Afbeelding laten weergeven als achtergrond
  push();
  rect(20, 20, 200, 50, 5);         // Rechthoek bovenaan links aanmaken
  textSize(40);                     // Textsize van de score aanpassen
  text("Score: " + score, 35, 58);  // "score" in text bovenaan in de rechthoek zetten

  if(score == 10){                  // Als score gelijk is aan 10
    if (geluid1.isPlaying()){       
        geluid1.stop();             // Voorkomen dat er overlapping is van geluiden
    }
    geluid1.play();                 // Geluid afspelen
    score = 0                       // Score terug op 0 zetten
}

for (let i = 0; i < bugs.length; i++) {
  bubble[i].move();
  bubble[i].display();
}

  push();
  butter1.show();
  butter1.update();
  pop();

  push();
  robot1.show();
  robot1.update();
  pop();
}
