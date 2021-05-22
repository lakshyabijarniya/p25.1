
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,bottomSide,rightSide,leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	paper= new Paper(100,500,10,{isStatic:true});
	ground=new Ground(600,580,1200,20,{isStatic:true});
	dustbin=new Dustbin(1000,560,170,20); 
	Engine.run(engine);
}


function draw() {

   rectMode(CENTER);
   background("blue");
   Engine.update(engine);
   paper.display();
   ground.display();
   dustbin.display();

   drawSprites();


}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {
    x: 20,
	y: -20
});
}
}



