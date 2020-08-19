var rect1,rect2;


function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400,100,50,50);
 rect2 = createSprite(400,300,50,100);
 rect1.debug = true;
 rect2.debug = true;
 rect1.velocityY = 5;
 rect2.velocityY = -5;
 rect3 = createSprite(100,300,50,50);
 rect3.velocityX = 5;

}

function draw() {
  background(255,255,255);
  
  //bounceOff(rect2,rect3)

  if (isTouching (rect2,rect1)) {
    rect2.shapeColor="red";
    rect1.shapeColor="blue"; 
  }
  else{
      rect2.shapeColor = "green";
      rect1.shapeColor = "green";
  }
  


 drawSprites();
}

