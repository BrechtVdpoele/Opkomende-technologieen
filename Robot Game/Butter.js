let sound;

function preload(){
    sound = loadSound('Media/Butter.mp3')
  }

class Butter {
    constructor(geel = "#FFEC89", zwart = "black") {
      this.yellow = geel;
      this.zwart = zwart;
      this.locationX = int(0);
      this.locationY = int(0);
      this.distance = 0;
      this.score = 0;
    }
    
    update(){
      this.distance = dist(mouseX, mouseY, this.locationX, this.locationY)               
        if(this.distance<100){
      this.locationX = random(150,900);
      this.locationY = random(150,900);
      }
    }
    
    show(){
      fill(this.yellow);
      stroke(this.zwart);
      strokeWeight(4)
      rect(this.locationX, this.locationY, 50, 30) ;
      text(this.score,155,58)
      
      if(this.score == 10){
        if (sound.isPlaying()){
            sound.stop();
        }
        sound.play();
        this.score = 0

      }
    } 
  }


