var box,boxImage
function preload() {
  boxImage=loadImage("Player-Sprite.png")
}
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
  box.addImage("Galaga",boxImage);
  box.scale=0.2
}

function draw() 
{
  background("black");
    if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+10
  } 
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-10
  } 
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+10
  } 
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-10
  } 
  if(keyDown("D")){
    box.position.x=box.position.x+10
  } 
  if(keyDown("A")){
    box.position.x=box.position.x-10
  } 
  if(keyDown("S")){
    box.position.y=box.position.y+10
  } 
  if(keyDown("W")){
    box.position.y=box.position.y-10
  } 
  drawSprites()
}




