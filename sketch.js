
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ball;
var ground, startGround;
var leftWall, rightWall;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.2,
		friction: 0,
        density: 1.2
	}

    ball = Bodies.circle(260,100,10, ball_options);
    World.add(world,ball);

    ground = new Ground(width/2, 670, width, 20);
	leftWall = new Ground(1100,600,20,120);
	rightWall = new Ground(1350, 600, 20, 120);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  
  ground.show();
  leftWall.show();
  rightWall.show();

  
  ellipse(ball.position.x, ball.position.y, 10);

  Engine.update(engine);
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 27, y: -15})
	}
}

