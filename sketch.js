var trex ,trex_running;
var solo,imagem_solo;



//preload carrega as midías
function preload(){
  //animação do Trex
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
 
  //imagem do solo
  imagem_solo = loadImage("ground2.png");
}


//setup faz aconfiguração
function setup(){
  createCanvas(600,200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5; 
  trex.x=50;


  solo =  createSprite(300,190,600,2)
  //solo.addImage("solo", imagem_solo);
  //solo.x = solo.width/2;

 
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("gray");

  solo.velocityX = -10

  
  if(keyDown("space")){
    trex.velocityY = -10;
  }

 //criando a gravidade
  trex.velocityY += 0.5; 


     
 //coordenadas do mouse na tela
   text("X: "+mouseX+"  / Y: "+mouseY,mouseX,mouseY);

  //colisão do trex com as bordas
  trex.collide(solo);

  
  drawSprites();

}

