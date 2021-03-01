//variables here
var rabbit_Img,rabbit,bgImg,background,carrot,carrotImg;
var gameState;
var play=1;
var end=0;

function preload(){
  //loadImages here
  rabbit_Img=loadAnimation("R-1.png","R-2.png","R_3.png","R-4.png");
  bgImg=loadImage("forestBg.png");
  carrotImg=loadImage("carrot.png");
}

function setup(){
 createCanvas(600,450);
  
  background=createSprite(350,200);
  background.addImage(bgImg);
  background.velocityX=-3;
  
  //a sprite for rabbit
  rabbit=createSprite(150,350,10,10);
  rabbit.addAnimation("Img",rabbit_Img);
  
  FoodGroup=new Group();
  
}

function draw(){
  
  drawSprites();
  
  //giving the background a run for infinite
  if(background.x < 0){
    background.x=background.width/2;
  }
  
  //calling the gameStates
  if(gameState === "play"){
    play();
  }else if(gameState === "end"){
    end();
  }
  
  //make the rabbit jump!
  if(keyDown("space")&& rabbit.y >= 100) {
        rabbit.velocityY = -12;
    }
    
    //add gravity!
    trex.velocityY = trex.velocityY + 0.8
  
  fruits();
  
}

function fruits(){
  if(frameCount%80===0){
    carrot=createSprite(500,100,20,20);
    carrot.y=Math.round(random(120,180));
    carrot.addImage(carrotImg);
    carrot.velocityX=-5;
    carrot.lifetime=90;
    carrot.scale = 0.2;
    FoodGroup.add(carrot);
  }
  
}