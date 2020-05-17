var car,wall;
var speed,weight;
var deformation
function setup() {
  createCanvas(1600,800);
  car=createSprite(100,400,40,40);
  wall=createSprite(1000,400,50,1000);
  wall.shapeColor="purple";
  speed=random(50,100);
  weight=random(300,500);
  }

function draw() {
  background(0,0,0);
console.log(random);
  car.velocityX=speed;
 
  if(wall.x-23 -car.x <car.width/2 + wall.width/2){
    car.velocityX=0;
    speed=0;
     deformation=weight* speed* speed *0.5/22500;
  }
  
  if(deformation<100){
    car.shapeColor = "green";

  }
  if(deformation<100 && deformation>180){
   car.shapeColor="yellow";
  }
  if(deformation>180){
car.shapeColor="red";
 }
  drawSprites();
}
