var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -12;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background(180);
  
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY = -12;
  }
  
  //dando gravidade
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar nuvens
  spawnClouds();


  
  
  drawSprites();
}

function spawnClouds() {
  //escreva aqui o código para gerar nuvens
  if (frameCount % 80 === 0) {
    cloud = createSprite(600,random(10,100),40,10);
    cloud.addImage(cloudImage)
    cloud.depth = trex.depth-1
    cloud.scale =random(0.4,1.4);
    cloud.velocityX = -3;
    
    
    }
}

