var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet;


function preload(){
  
//  shooterImg = loadImage("assets/shooter_2.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
/*player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)*/
player = new Jugador(displayWidth-1150, displayHeight-300)

}

function draw() {
  background(0); 
player.handelControl();

  //moving the player up and down and making the game mobile compatible using touches



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
 player.shoot()
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
player.noShoot()
}

drawSprites();

}
