var player;
var path;

function preload() {

}

function setup() {
  canvas = createCanvas(750,600);
  
  player = createSprite(400,400,20,20);
  player.scale = 1;
  player.shapeColor = "blue";

  path = createSprite(width/2,height-100,750,1);
  path.shapeColor = "black";

}

function draw() {
  background(100);

  if(keyDown(LEFT_ARROW)){
    player.x -= 5; 
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 5;
  }

  drawSprites();
}
