
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope,roof;

function preload()
{
	
}

function setup() {
	createCanvas(600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(165,550,60,60);
	bob2 = new Bob(228,550,60,60);
	bob3 = new Bob(291,550,60,60);
	bob4 = new Bob(354,550,60,60);
	bob5 = new Bob(417,550,60,60);
	roof = new Roof(300,200,400,30);
  rope = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(232,225,247);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();
  drawSprites();
 
}



