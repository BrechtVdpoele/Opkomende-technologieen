
function preload(){
  }

class Butter {
    constructor(geel = "#FFEC89", zwart = "black") {
      this.yellow = geel;
      this.zwart = zwart;
      this.locationX = random(0,windowWidth-30);
      this.locationY = random(0,windowHeight-30);
      this.distance = 0;
    }
    
    update(){
      this.distance = dist(mouseX, mouseY, this.locationX, this.locationY)               
        if(this.distance<100){
      this.locationX = random(0,windowWidth-50);
      this.locationY = random(0,windowHeight-50);
      score+=1;
      }
    }
    
    show(){
      fill(this.yellow);
      stroke(this.zwart);
      strokeWeight(3)
      rect(this.locationX, this.locationY, 50, 30) ;
    } 
  }


