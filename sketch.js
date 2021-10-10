const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
  backgroundImg = loadImage("snow3.jpg")
}


function setup() {

  engine = Engine.create();
	world = engine.world;
  createCanvas(windowWidth,windowHeight);

  snow1=new Snow(500,100,100)
  snow2=new Snow(600,100,100)
  snow3=new Snow(400,100,100)
  snow4=new Snow(700,100,100)
  snow5=new Snow(750,100,100)
  snow6=new Snow(650,100,100)
  

  // createSprite(400, 600, 50, 50);

  var g_options = {
    isStatic: true
  }

  ground= Bodies.rectangle(500,500,1000,20, g_options)

  Engine.run(engine);
}

function draw() {
  background(backgroundImg)  
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  drawSprites();
}

