var bullet,wall,thickness;
var speed,weight,damage;
function setup(){
  createCanvas(1500,400);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";

 

  speed = random(223,321);
  weight = random(30,52);
  thickness =random(22,83);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="brown";
}
function draw(){
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor="red";
    }
    if (damage<10){
      bullet.shapeColor="green"
    }
  }
  
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}