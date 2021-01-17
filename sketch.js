var jake,back
 

function preload(){
 b1=loadImage("bg1.jpg")
 j1=loadImage("jake1.jpg")

}

function setup() {
  createCanvas(1200, 610);
 back=createSprite(600,400,1200,610)
 back.addImage(b1)
 back.scale=6
 back.velocityY=3
 jake=createSprite(600,590)
 jake.addImage(j1)
 invisibleGround=createSprite(600,400,1200,610)
 invisibleGround.visible=false
}

function draw() {
  background(0);          

  if(keyDown("space")) {
    jake.velocityY = -10;
  }
  
  //jake.velocityY = jake.velocityY + 0.8
  
  if (back.y > 400){
    back.y = back.height/2;
  }
  
  jake.collide(invisibleGround);
  drawSprites();
}