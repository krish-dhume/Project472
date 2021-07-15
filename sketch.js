var backImg,spaceship,spaceshipImg,asteroid,asteroidGroup,asteroidImg,lazer,lazerImg;
var PLAY=1;
var END=0;
var gameState=1;
var restart,restartImg;
var gameOver,gameOverImg;
function preload(){
  backImg=loadImage("Space.jpg");
  spaceshipImg=loadImage("SpaceCraft.jpg");
  asteroidImg=loadImage("Meteo.jpg");
  lazerImg=loadImage("Lazer Beam.jpg");
  gameOverImg=loadImage("GameOver.png");
  restartImg=loadImage("RestartImg.png")
}
function setup(){
  createCanvas(displayWidth,displayHeight);

  spaceship=createSprite(displayWidth/2,550,30,70);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.5;

  asteroidGroup=new Group();

  //var restart=createSprite(displayWidth/2,displayHeight/2-200,20,40);
 // restart.addImage(restartImg);
 // restart.scale=0.7;

  //var gameOver=createSprite(displayWidth/2,displayHeight/2-300,20,20)
 //gameOver.addImage(gameOverImg);
 //gameOver.scale=0.7;
}
function draw(){
  background(backImg);

 
if(gameState===PLAY){
 // restart.visible=false;
  //gameOver.visible=false;

  if(keyDown("space")){
    createLazer();
  }
  asteroidium();
}
 if(gameState===END){
  //restart.visible=true;
 // gameOver.visible=true;


textSize(24);
fill("yellow")
  text("Please Press on restart icon to replay the game",displayWidth/2,displayHeight/2);
 
 

}

  drawSprites();
}
function asteroidium(){
  if(frameCount%80===0){
  asteroid=createSprite(200,10,30,50);
  asteroid.addImage(asteroidImg);
  asteroid.scale=0.5;
  asteroid.velocityY=4;
  asteroid.x=Math.round(random(displayWidth/2+30,displayWidth/2+250,displayWidth/2+100,displayWidth/2-200,displayWidth/2+500,displayWidth/2-500,displayWidth/4-250,displayWidth/2+600,displayWidth/2-350,displayHeight/2-400));
  
  asteroidGroup.add(asteroid);
  console.log(asteroid.x)
  }
}
function createLazer(){
  var lazer=createSprite(spaceship.x,450,30,50);
  lazer.x=spaceship.x;
  lazer.addImage(lazerImg);
  lazer.scale=0.5;
  lazer.velocityY=-5;
}