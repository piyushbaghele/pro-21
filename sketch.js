
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

var ball,ground,lef_wall,right_wall ;

function setup() {
	createCanvas(800,800);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,480,1300,10);
up_wall = new Ground(290,10,1000,10);
right_wall = new Ground(790,230,10,490);
leftSmall_wall = new Ground(750,425,10,100);
rightSmall_wall = new Ground(600,425,10,100);


var ball_option ={
  isStatic:false,
  restitution:0.3,
  density:5,
  friction:0
}

//Create the Bodies Here.
ball = Bodies.circle(200,100,15,ball_option)
World.add(world,ball)

rectMode(CENTER);
ellipseMode(RADIUS) ;

Engine.run(engine);
  
}


function draw() {
  
  background(51);
  
 ground.display();
 up_wall.display();
 right_wall.display();
 leftSmall_wall.display();
 rightSmall_wall.display();

  fill("yellow")
  ellipse(ball.position.x,ball.position.y,15)

  keypressed()
  keypressed_RIGHT()

  drawSprites();

}

function keypressed() {
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0}  ,  {x:0,y:-0.90})
  }
}

function keypressed_RIGHT() {
  if(keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0}  ,  {x:0.90,y:0}); 
  }
  

}