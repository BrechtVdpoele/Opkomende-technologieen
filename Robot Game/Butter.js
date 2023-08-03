
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
      this.locationX = random(20,windowWidth-100);
      this.locationY = random(100,windowHeight-200);
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


