var bullet,wall,speed,thic,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thic=random(22,83);
wall=createSprite(1200, 200, thic , height/2);
bullet=createSprite(50, 200, 50, 7);
bullet.velocityX=speed;
bullet.shapeColor="white";
wall.shapeColor="brown";
}


function draw() {
  background("black");  
if(wall.x-bullet.x<bullet.width/2+wall.width/2)
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thic*thic*thic);
  if(damage>10)
  {
    bullet.shapeColor="red";
  }
  else{
    bullet.shapeColor="green";
  }
}

  drawSprites();
}