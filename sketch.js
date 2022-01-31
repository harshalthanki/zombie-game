var bg,bgImg;
var player, shooterImg, shooter_shooting;
var oneLifeImg;
var twoLivesImg;
var threeLivesImg;
var zombie, zombieImg;
var lifeCount = 3;
var life;
var gameState = play;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  oneLifeImg = loadImage("assets/heart_1.png")
  twoLivesImg = loadImage("assets/heart_2.png")
  threeLivesImg = loadImage("assets/heart_3.png")
  zombieImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
life = createSprite(displayWidth-200,displayHeight-displayHeight+50)
life.addImage(threeLivesImg)
life.scale = 0.3

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

  zombie = new Group();
}

function draw() {
  background(0); 

// if(gameState == "play")
// {
  spawnZombies();
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  if(keyWentDown("space")){
 
    player.addImage(shooter_shooting)
   
  }
  else if(keyDown("space")){
    
    player.addImage(shooterImg)
 
  
  }
  if(zombie.isTouching(player))
{
  lifeCount-=1;
  zombie.destroyEach();
}

if(lifeCount === 3)
{
  life.addImage(threeLivesImg)
}
else if(lifeCount === 2)
{
  life.addImage(twoLivesImg)
}
else if(lifeCount === 1)
{
  life.addImage(oneLifeImg)
}
 else if(lifeCount === 0)
 {
   gameState = "end"
 }
//}
//if(gameState == )

  






drawSprites();

}

function spawnZombies()
{
  if(frameCount%60 === 0)
  {
    var zombieS = createSprite(random(400,1000),random(150,550),50,50)
    zombieS.addImage(zombieImg)
    zombieS.scale = 0.1;
    zombieS.velocityX = -3;
    zombie.add(zombieS)
  }
}