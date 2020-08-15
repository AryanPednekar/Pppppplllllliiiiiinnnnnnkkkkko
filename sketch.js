const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var base;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    base=new Ground(240,795,480,10)
    for (var k = 15;k <=width-10 ; k=k+80) {
      divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight));
     }
     
    for (var j = 15;j <=width ; j=j+50) {
      plinkos.push(new Plinko (j,75));
      
     }
     for (var j = 15;j <=width-10 ; j=j+50) {
       plinkos.push(new Plinko (j,175));
      }
      for (var j = 15;j <=width-10 ; j=j+50) {
        plinkos.push(new Plinko (j,275));
       }
       for (var j = 15;j <=width-10 ; j=j+50) {
        plinkos.push(new Plinko (j,375));
       }
       
       
      
       
       
      
  
     
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  

 for(var k=0;k<divisions.length;k++){
   divisions[k].display();
  }
 
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
 base.display();
  
  drawSprites();
  

}