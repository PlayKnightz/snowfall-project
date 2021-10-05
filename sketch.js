const Engine = Matter.Engine;
 const World = Matter.World;
const  Events = Matter.Events;
 const Bodies = Matter.Bodies;

var engine,world
var snowfalling
var snow=[]


function preload() {
snowfalling=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);

   engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(snowfalling);  
  Engine.update(engine);
  if (frameCount%50===0){
    snow.push(new Snows(random(0,800),0))
  }



  for (var j = 0; j < snow.length; j++){
    snow[j].display();
  }

}
