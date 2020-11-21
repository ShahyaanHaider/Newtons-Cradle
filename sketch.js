
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;                                   
var roof
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof = new Roof (width/2,height/4,width/7,20);
	bob1= new Bob (720,675,40)
	bob2= new Bob (760,675,40)
	bob3= new Bob (800,675,40)
	bob4= new Bob (840,675,40)
	bob5= new Bob (880,675,40)
	rope1=new Chain (bob1.body,roof.body,-80,0)
	rope2=new Chain (bob2.body,roof.body,-40,0)
	rope3=new Chain (bob3.body,roof.body,0,0)
	rope4=new Chain (bob4.body,roof.body,40,0)
	rope5=new Chain (bob5.body,roof.body,80,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites()
}
function keyPressed(){  
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:50})
	}
}

