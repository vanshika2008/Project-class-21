var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1400,400);
  bullet=createSprite(50, 200, 100, 30);
  thickness = random(22,93);
  wall=createSprite(1300, 200, thickness, height/2);
  wall.shapeColor= 80,80,80;
  speed = random(223,321);
  weight = random(32,52);
  bullet.velocityX = speed;
}
function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;   

    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
    if (damage>10){
        wall.shapeColor = color(255,0,0);
    }

    if (damage<10){
        wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }

     return false;
}