var play;
var end;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,invisibleGround;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	invisibleGround = createSprite(200,190,400,10);
	invisibleGround.visible = false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	helicopterSprite.velocity.x = 0;
	helicopterSprite.velocity.y = 0;	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  
 // packageSprite.visible = false;
  Keypressed();
 function Keypressed(){
	  if(KeyCode = "space"){
	   packageSprite.velocity.y = 5;    
	   packageSprite.visible = true;
	  }
	}
	if(KeyCode = "RIGHT_ARROW"){
		helicopterSprite.velocity .x = 3;
	}
	if(KeyCode = "LEFT_ARROW"){
		helicopterSprite.velocity.x = -3;
	}
	if(KeyCode = "UP_ARROW"){
		helicopterSprite.velocity.y = -3;
	}
	
		drawSprites();
		
}






