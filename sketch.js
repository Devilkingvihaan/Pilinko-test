const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var division=[]
var divisionHeight=300;
var pilinko=[]
var particle=[];
var score=0;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(width/2,height,width,10);
  for(var k=0;k<=width;k=k+80){
    division.push( new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=50;j<=width;j=j+50){
    pilinko.push(new Pilinko(j,75))
  }
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(k=0;k<division.length;k++){
    division[k].display();
  }
  for(j=0;j<pilinko.length;j++){
    pilinko[j].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10))
    score++
  }
  for(j=0;j<particle.length;j++){
    particle[j].display();
  }
  text("score:"+score,20,30)
}
