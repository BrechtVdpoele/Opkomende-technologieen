


class Robot {
  constructor(zwart = 'black',StandaardVulling2 = '#AAAAA3',standaardVulling1 = 'rgb(52,54,63)', rupsbandKleur = 'rgb(113,113,113)', geel = '#FFEB3B', roze = 'rgb(219,13,135)',rood = '#F44336', blauw = 'rgb(63,147,166)', groen = '#69AD53', goud = '#FFC107', angle = 0, angle2 = 0) {
  
  this.zwart = zwart;
  this.StandaardVulling2 = StandaardVulling2;
  this.standaardVulling1 = standaardVulling1;
  this.rupsbandKleur = rupsbandKleur;
  this.geel = geel;
  this.roze = roze;
  this.rood = rood;
  this.blauw = blauw;
  this.groen = groen;
  this.goud = goud;
  this.angle = angle;
  this.angle2 = angle2;
  this.robotX = 0;
  this.robotY = 0;
  this.posRups = 0;
}

update(){
  this.robotX = mouseX-65;
  this.robotY = mouseY-50;
  
}

show(){
   push();
  translate(this.robotX,this.robotY);
  let ms = millis();

//KLEUR OMLIJNING ZWART
  stroke(this.zwart);

//LINKER ARM
push();
  //Bovenarm Links
  rotate(this.angle)
  fill(this.standaardVulling1);
  strokeWeight(4);
  rect(-10,-10,20,60);
  rect(-14,33,2,14,3);

  //Elleboog Links
  fill(this.StandaardVulling2);
  rect(-8,50,16,29);

  translate(-10,70);

  //Voorarm Links
  rotate( this.angle2);
  fill( this.standaardVulling1);
  rect(0,-5,20,35,2);
  rect(20,5,2,14,3);

  //Hand Links
  fill( this.StandaardVulling2);
  rect(-8,22,5,20,2);
  rect(-8,42,25,5,2);
  strokeWeight(0);
  rect(-6,30,1,14,1);
  

 

  

pop();

push();
  //Schouder Links
  fill(this.StandaardVulling2);
  strokeWeight(4);
  rect(-15,-15,30,30,5);
pop(); if (ms % 3000 < 1500) {
   this.angle -= PI / 100;
    this.angle2 -= PI / 200;
  } else{
    this.angle += PI / 100;
    this.angle2 += PI / 200;
  } 


//RECHTER ARM

push();
  translate(135,0);
  //Bovenarm Rechts
  rotate(-this.angle);
  strokeWeight(4);
  fill(this.standaardVulling1);
  rect(-11,-10,20,60);
  rect(11,30,2,14,3);

  //Elleboog Rechts
  fill(this.StandaardVulling2);
  strokeWeight(4);
  rect(-8,50,16,29);

  translate(10,70);

  //Voorarm Rechts
  rotate(-this.angle2);
  fill(this.standaardVulling1);
  rect(-20,-5,20,35,2);
  rect(-22,6,2,14,3);
 
  //Hand Rechts
  fill(this.StandaardVulling2);
  rect(3,25,5,20,2);
  rect(-17,44,25,5,2);
  strokeWeight(0);
  rect(5,33,1,14,1);

pop();

push();
  //Schouder Rechts
  translate(120,15);
  fill(this.StandaardVulling2);
  strokeWeight(4);
  rect(0,-30,30,30,5) // constrain angle to range between 0     and 90 degrees
  this.angle = constrain(this.angle, 1/10, PI / 2);
  this.angle2 = constrain(this.angle2, 0, PI/4);
pop();

//BODY
push();
  translate(-133,-130);

  //VERBINDINGEN
push();
  fill(this.zwart);
  rect(262,110,14,3,3);
  rect(125,110,14,3,3);
  rect(171,252,2,14,3);
  rect(227,252,2,14,3);
  stroke(this.zwart);
  strokeWeight(1)
  rect(118,305,2,30,3);
  rect(279,305,2,30,3);
pop();
  
push();
//Driehoek
  fill(this.standaardVulling1);
  strokeWeight(4);
  triangle(200,250,250,178,150,178);

//Basisvierkant//
  fill(this.StandaardVulling2);  //inkleuring
  strokeWeight(4);
  rect(145,88,110,110,7);

//Basisvierkant Onder
  fill(this.standaardVulling1);
  strokeWeight(4);
  rect(180,252,40,55);

//Basisvierkant Midden
  fill(this.standaardVulling1);
  strokeWeight(4);
  rect(175,213,50,60);

//Onderplaat
  color(this.zwart);
  fill(this.StandaardVulling2);
  strokeWeight(4);
  rect(144,302,110,36);
pop();


//RUPSBANDEN

//Rupsband Links
push();
  fill(this.rupsbandKleur);
  strokeWeight(4);
  rect(122,286,29,67,5);
  strokeWeight(2);

  if (ms % 100 > 50) {        // Zoveel mogelijk delen door 1000 zolang er een geheel getal over blijft
    this.posRups = -2;        // & daarna rest weergeven. bv: 1296 % 100 = 96 want (12*100) + 96 = 1296
   } else{                    // Dus in dit voorbeeld "ms % 100 > 50" wil zeggen 20x per seconde wisselen!!!
     this.posRups = 0;        // Want gaat over [0<x<50] & [50<x<100] & 1 seconde = 1000 millis
   } 
  
    for(let i=0; i<65; i+=5){
    line(148,291+i-this.posRups,122,287+i-this.posRups);
  }
pop();

//Rupsband Rechts
push();
  fill(this.rupsbandKleur);
  strokeWeight(4);
  rect(248,286,29,67,5);
  strokeWeight(2);

    for(let i=0; i<65; i+=5){
    line(248,291+i-this.posRups,278,287+i-this.posRups);
  }
pop();


//DECO

  //Kabel links
push();
  color(this.rupsbandKleur);
  fill(this.standaardVulling1);
  strokeWeight(2);
  rect(153,79,20,9);
  fill(this.geel);
  ellipse(170,66,26,25);                        
  rect(157,65,6,14);
  rect(177,68,6,17)
  strokeWeight(0);
  rect(178,66,4,20);
  rect(158,64,4,12);
  strokeWeight(2);
  rect(186,66,6,15);
  fill(this.groen);
  ellipse(170,66,14,14);
  strokeWeight(0);
  rect(164,66,12,12.5);
pop();


  //Kabel Rechts
push();
  fill(this.standaardVulling1);
  strokeWeight(2);
  rect(180,79,20,9);
  fill(this.rood) ;
  ellipse(199,59,26,25);             
  rect(186,61,4,18);
  rect(206,61,6,26);
  strokeWeight(2);
  rect(186,61,6,18);
  strokeWeight(0);
  rect(206.8,57,4,20);
  rect(187,54,4,12);
  strokeWeight(2);
  fill(this.groen);
  ellipse(199,59,13,10);
  strokeWeight(0);
  rect(193,59,12,14);
pop();


  //Knop
push();
  fill(this.roze);
  strokeWeight(2);
  rect(225,69,16,16,8);
  fill(this.zwart);
  strokeWeight(2);
  rect(220,79,25,9);
pop();

  //Butter
push();
  color('113,113,113');
  fill(this.goud);
  strokeWeight(2);
  rect(165,309,70,22,3);
  fill(this.zwart);
  strokeWeight(0.2);
  textSize(15);
  textFont('Harlow Solid');
  text('Butter',178,323);
pop();


//OOG
push();
  fill('rgba(11,17,43,0.57)');
  strokeWeight(4);
  ellipse(200,142,75,75);
  strokeWeight(2);
  ellipse(200,142,62,62);
  fill(this.blauw);
  ellipse(200,142,40,40);
  strokeWeight(0);
  fill('rgba(255,255,255,0.61)');
  ellipse(210,130,26,26);
pop();

}
}