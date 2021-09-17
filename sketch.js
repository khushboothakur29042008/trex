
var trex ,trex_running;
var ground,groundimage
function preload(){
  trex_running=loadAnimation('trex1.png',"trex3.png","trex4.png")
  groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,20)
trex.addAnimation("trex",trex_running)
trex.scale=0.6

ground=createSprite(300,180,600,20)
ground.addImage(groundimage)
ground.velocityX=-4
}

function draw(){
  background("white")
  
if(keyDown("space")){
  trex.velocityY=-10
}
trex.velocityY=trex.velocityY+0.8

if(ground.x<0){
  ground.x=ground.width/2

}


trex.collide(ground)
drawSprites()
}
