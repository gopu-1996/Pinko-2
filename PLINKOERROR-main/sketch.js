var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var gameOver;
var particles = [];
var plinkos = [];
var divisions = [];
var checking;
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
//  checking = new Divisions(400,450,800,10);
  particle = null;
  gameOver = loadImage("GAME_OVER!.png");
  gameOver.visible = false;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 
 text("250",25,600);
 text("500",105,600);
 text("250",185,600);
 text("750",265,600);
 text("1000",345,600);
 text("250",425,600);
 text("100",505,600);
 text("500",585,600);
 text("250",665,600);
 text("750",745,600);

  Engine.update(engine);
  //checking.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!==null){
     particle.display();
   if(particle.body.position.y>450&&particle.body.position.x<65){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
 else if(particle.body.position.y>450&&particle.body.position.x<145){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }

  }
  
 else if(particle.body.position.y>450&&particle.body.position.x<225){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else if(particle.body.position.y>450&&particle.body.position.x<305){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else if(particle.body.position.y>450&&particle.body.position.x<385){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
 else if(particle.body.position.y>450&&particle.body.position.x<465){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else  if(particle.body.position.y>450&&particle.body.position.x<545){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else if(particle.body.position.y>450&&particle.body.position.x<625){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else if(particle.body.position.y>450&&particle.body.position.x<705){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
  
  else if(particle.body.position.y>450&&particle.body.position.x<785){
    score = score + 250;
    particle=null;
    if(turn>=5){
      gameState="end";
    }
  }
 // particle = null;
}

  if(turn === 5){
    gameState = "end";
    gameOver.visible = true;
  }

}

function mousePressed(){
  if(gameState !== "end"){
    turn = turn + 1;
//score++;
    particle = new Particle(mouseX,10,10,10);
    
  }
}