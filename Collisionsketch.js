var MovRect,FixRect;
var rect1;
function setup() {
  createCanvas(800,400);
  FixRect= createSprite(400, 200, 50, 50);
  FixRect.shapeColor='blue';
  FixRect.debug=true;

  MovRect=createSprite(400,200,80,60);
  MovRect.shapeColor='blue';
  MovRect.debug=true;

  rect1=createSprite(280,320,60,60);
  rect1.shapeColor='blue';
  rect1.debug=true;
}

function draw() {
  background(255,255,255);  

  MovRect.x=mouseX;
  MovRect.y=mouseY;

 var bool=isTouching(MovRect,rect1);
  if (bool) {
    MovRect.shapeColor='green';
    rect1.shapeColor='green';
  } else {
    MovRect.shapeColor='blue';
    rect1.shapeColor='blue';
  }
  drawSprites();
}

