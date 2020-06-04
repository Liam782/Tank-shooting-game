var ground;

var tanker,turret;

var bullets;
var obstacles1,obstacles2;

var score = 0;

var bullet,obstacle1,obstacle2;

var gameState;

function setup() {
  createCanvas(800,400);

  gameState = 1;

  ground = createSprite(400, 400, 800, 10);
  ground.shapeColor = "brown";

  tanker = createSprite(10,200,20,60);
  tanker.shapeColor = "black";

  turret = createSprite(20,200,40,10);
  turret.shapeColor = "black";

  bullets = createGroup();
  obstacles1 = createGroup();
  obstacles2 = createGroup();
}

function draw() {
  background(255,255,255);  

  tanker.y = mouseY;
  turret.y = mouseY;

  if(mouseWentDown(LEFT) && gameState === 1){
    bullet = createSprite(20,mouseY,20,5);
    bullet.shapeColor = "red";
    bullet.velocityX = 50;
    bullets.add(bullet);
  }

  if(frameCount%70 === 0 && gameState === 1){
    obstacle1 = createSprite(random(700,780),-20,40,40);
    obstacle1.velocityY = random(5,10);
    obstacle1.shapeColor = "yellow";
    obstacles1.add(obstacle1);
  }

  if(frameCount%50 === 0 && gameState === 1){
    obstacle2 = createSprite(random(500,650),420,20,20);
    obstacle2.velocityY = random(-5,-10);
    obstacle2.shapeColor = "blue";
    obstacles2.add(obstacle2);
  }

  if(bullets.isTouching(obstacles1)){
    obstacle1.destroy();
    score++;
  }

  if(bullets.isTouching(obstacles2)){
    obstacle2.destroy();
    score++;
  }

  if(keyDown("space")){
    obstacle1.shapeColor = "red";
  }

  if(score === 100){
    gameState = 2;
  }

  if(gameState === 2){
    fill("green");
    textSize(50);
    text("YOU WIN!",300,200);
  }

  fill("black");
  textSize(30);
  text("score: " + score,60,30);
  textSize(20);
  text("get 100 points to win! points left to score: " + (100 - score),60,380);

  drawSprites();
}