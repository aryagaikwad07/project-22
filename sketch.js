
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var d1,d2;


function preload()
{
	
}

function setup() {
	createCanvas(1700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(200,500,3000,40);
 d1 = new Ground(600,450,10,150);
 d2= new Ground(450,450,10,150);

 var ball_options = {
	isStatic : false,
	restitution : 0.3, 
	frictionAir : 0,
	density : 1.2
 }
   
    ball = Bodies.circle(100,50,20,ball_options); 
	World.add(world,ball);

	Engine.run(engine);
	

}


function draw() {
	background(0);
	rectMode(CENTER);
    ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  
  
  drawSprites();
  ground.show();
  d1.show();
  d2.show();
  keyPressed();
  
}
function keyPressed(){
    if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.7});
	}
}


