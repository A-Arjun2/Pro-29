const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
       createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  
  
  ground = new Ground(600,height,800,20);
}

function draw() {
  background("brown");  

  ground.display();




  drawSprites();
}