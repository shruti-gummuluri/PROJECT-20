var jerry;
var tom;



function preload() {
   jerryimg=loadAnimation("images/jerryOne.png");
   tomimg=loadAnimation("images/tomOne.png");
   tomimg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomimg3=loadAnimation("images/tomFour.png");
   jerryimg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   jerryimg3=loadAnimation("images/jerryFour.png");
   bgimg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    jerry=createSprite(150,650);
    jerry.scale=0.2
    jerry.addAnimation("stand",jerryimg)
    tom=createSprite(850,600);
    tom.scale=0.2
     tom.addAnimation("resting",tomimg);
    
}

function draw() {

    background(bgimg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("standing",tomimg3);
        tom.x=300
        tom.changeAnimation("standing")
        jerry.addAnimation("smiling",jerryimg3);
        jerry.changeAnimation("smiling");
    }

    drawSprites();
}


function keyPressed(){

if(keyCode=== LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("running",tomimg2);
    tom.changeAnimation("running");
    jerry.addAnimation("teasing",jerryimg2);
    jerry.changeAnimation("teasing")
}
}
