var MovRect,FixRect;

function setup() {
  createCanvas(800,800);
  FixRect= createSprite(750, 0, 50, 50);
  FixRect.shapeColor='blue';
  FixRect.debug=true;

  MovRect=createSprite(0,750,50,50);
  MovRect.shapeColor='blue';
  MovRect.debug=true;

  FixRect.velocityY=5;
  MovRect.velocityY=-5;

  FixRect.velocityX=-5;
  MovRect.velocityX=5;
}

function draw() {
  background(255,255,255);  
 bounceOff(MovRect,FixRect);
  
  drawSprites();
}

