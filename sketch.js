const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Body = Matter.Body;

    var particle;
    var plinkos = [];
    var divisions = [];
    var particle ;
    var divisionHeight = 280;
    var line;

    gameState = "PLAY";
    
    var count = 0;
    var score = 0;

function setup() {
  createCanvas(1000,750);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,730 ,1200,20);

  ground2 = new Ground2(450,420,1200,10);

  for (var k = 0 ; k <= width ; k = k + 100)
  {
    divisions.push(new Divisions(k , 580 , 10 , 300));
  }

  for(var j = 75 ; j <= width ; j = j + 50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50 ; j <= width-10 ; j = j + 50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75 ; j <= width ; j = j + 50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50 ; j <= width ; j = j + 50)
  {
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background("black");
  
  Engine.update(engine);

  textSize(35)
  text("Score : " + score,20,40);
  fill(255);

  textSize(35)
  text(" 500 ", 5 , 550);
  text(" 500 ", 110 , 550);
  text(" 500 ", 210 , 550);
  text(" 500 ", 310 , 550);
  text(" 100 ", 410 , 550);
  text(" 100 ", 510 , 550);
  text(" 100 ", 610 , 550);
  text(" 200 ", 710 , 550);
  text(" 200 ", 810 , 550);
  text(" 200 ", 910 , 550);

  
  ground2.display();

  if(gameState === "END")
  {
    background("black");
    fill("red");
    textsize(100);
    text("GAME OVER",200,400);
  }
  
  for (var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }

  if(particle != null)
  {
    particle.display();

    if (particle.body.position.y > 550)
    {
      if(particle.body.position.x < 300)
      {
        score = score + 500;
        particle = null;
        if (count >= 5) gameState = "END"
      }

      else if (particle.body.position.x < 600 && particlebody.position.x >300)
      {
        score = score + 100;
        particle = null;
        if (count >= 5) gameState = "END";
      }

      else if (particle.body.position.x < 900 && particle.body.position.x > 600)
      {
        score = score + 200;
        particle = null;
        if (count >= 5) gameState = "END";
      }
    }
    
  }
  
  ground.display();

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
}

   function mousePressed()
   {
     if(gameState !== "END")
     {
       
       particle = new Particle(mouseX,50,10,10);
     }
   }
 

  

  
