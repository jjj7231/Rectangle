
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect1,fixedRect2,fixedRect3;
function setup() {
  createCanvas(1200,800);
 fixedRect1 = createSprite(200,100,50,50);
 fixedRect1.shapeColor="green"
 
 fixedRect2 = createSprite(300,100,50,50);
 fixedRect2.shapeColor="green"
 
 fixedRect3 = createSprite(400,100,50,50);
 fixedRect3.shapeColor="green"
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green";
  }
 if(isTouching(movingRect,fixedRect1))
 {
   movingRect.shapeColor="blue";
   fixedRect1.shapeColor="blue";
 }
 else {
  movingRect.shapeColor = "green";

  fixedRect1.shapeColor = "green";
}

if(isTouching(movingRect,fixedRect2))
{
  movingRect.shapeColor="blue";
  fixedRect2.shapeColor="blue";
}
else {
 movingRect.shapeColor = "green";

 fixedRect2.shapeColor = "green";
}

if(isTouching(movingRect,fixedRect3))
{
  movingRect.shapeColor="blue";
  fixedRect3.shapeColor="blue";
}
else {
 movingRect.shapeColor = "green";

 fixedRect3.shapeColor = "green";
}
//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(body1,body2){
  if (body1.x - body2.x < body2.width/2 + body1.width/2
    && body2.x - body1.x < body2.width/2 + body1.width/2
    && body1.y - body2.y < body2.height/2 + body1.height/2
    && body2.y - body1.y < body2.height/2 + body1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


