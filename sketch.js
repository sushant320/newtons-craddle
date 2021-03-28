const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var chain ;
var engine, world;
var box1, pig1;
var slingshot ;
var backgroundImg,platform;
var constrainedlog;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(500,50,300,20);

    box1 = new Box(400,100,20);
    box2 = new Box(470,100,20);
    box3 = new Box(540,100,20);
    box4 = new Box(610,100,20);
    //constrainedlog = new Log (200,100,100,PI/2);
   
    
    slingshot1  = new Slingshot(box1.body,{x:400,y:50})
    slingshot2  = new Slingshot(box2.body,{x:470,y:50})
    slingshot3  = new Slingshot(box3.body,{x:540,y:50})
    slingshot4 = new Slingshot(box4.body,{x:610,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display(); 
  
   // constrainedlog.display();
    platform.display(); 
   slingshot1.display();
   slingshot2.display();
   slingshot3.display();
   slingshot4.display();
}

function mouseDragged (){

//Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

    function keyPressed() {
        if (keyCode === UP_ARROW) {
    
          Matter.Body.applyForce(box1.body,box1.body.position,{x:-50,y:-45});
    
        }

    }






















