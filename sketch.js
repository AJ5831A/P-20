var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white";
 wall = createSprite(700,200,30,height/2);
 speed = random(50,90);
 weight = random(400,1500);
 
}

function draw() {
  background("black");  

  car.velocityX = speed;
 //car.x=mouseX;
 //console.log(car.x-wall.x);
 IT();

  drawSprites();
}

 function IT(){
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;

  var dar = 0.5*weight*speed*speed/22500;
  if (dar>180){
car.shapeColor = color(255,0,0);
  }

  if(dar<180 && dar>100){
    car.shapeColor = color(230,230,0);
  }

  if(dar<100){
    car.shapeColor = color(0,255,0);
  }
  }
} 

