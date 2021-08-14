const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	wall = new Wall(400,100,400,50);

	bob1 = new Bob(220,400,25);
	// bob1.setCollider("circle",0,0,60);
	// bob1.debug=true;
	bob2 = new Bob(250,400,25);
	bob3 = new Bob(320,400,25);
	bob4 = new Bob(370,400,25);
	bob5 = new Bob(420,400,25);
	bob6 = new Bob(470,400,25);
	bob7 = new Bob(520,400,25);
	bob8 = new Bob(570,400,25);
	// bob5 = new Bob(420,400,25);

	chain1 = new Chain(bob1.body,{x:220, y:wall.body.position.y});
	chain2 = new Chain(bob2.body,{x:270, y:wall.body.position.y});
	chain3 = new Chain(bob3.body,{x:320, y:wall.body.position.y});
	chain4 = new Chain(bob4.body,{x:370, y:wall.body.position.y});
	chain5 = new Chain(bob5.body,{x:420, y:wall.body.position.y});
	chain6 = new Chain(bob6.body,{x:470, y:wall.body.position.y});
	chain7 = new Chain(bob7.body,{x:520, y:wall.body.position.y});
	chain8 = new Chain(bob8.body,{x:570, y:wall.body.position.y});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob6.display();
	bob7.display();
	bob8.display();

	wall.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	chain6.display();
	chain7.display();
	chain8.display();

	drawSprites();
 
}



