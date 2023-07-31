let sound;

function preload(){
    sound = loadSound('Media/Butter.mp3')
  }

class Butter {
    constructor(geel = "#FFEC89", zwart = "black") {
      this.yellow = geel;
      this.zwart = zwart;
      this.locationX = random(0,windowWidth-30);
      this.locationY = random(0,windowHeight-30);
      this.distance = 0;
      this.score = 0;
    }
    
    update(){
      this.distance = dist(mouseX, mouseY, this.locationX, this.locationY)               
        if(this.distance<100){
      this.locationX = random(0,windowWidth-30);
      this.locationY = random(0,windowHeight-30);
      score+=1;
      }
    }
    
    show(){
      fill(this.yellow);
      stroke(this.zwart);
      strokeWeight(4)
      rect(this.locationX, this.locationY, 50, 30) ;
      
      
      if(this.score == 10){
        if (sound.isPlaying()){
            sound.stop();
        }
        sound.play();
        this.score = 0;

      }
    } 
  }


