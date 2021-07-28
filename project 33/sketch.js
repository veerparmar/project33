var snowflake, snowflakeImg, snowflakeImg2;
var bgImg;

function preload() {
  snowflakeImg = loadImage("snowflake-png.png");
  snowflakeImg2 = loadImage("snowflake.png");
  bgImg = loadImage("bg.jpeg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
  createSnowflake2();
}

function createSnowflake(){
  if(frameCount % 10 === 0){
  snowflake = createSprite(random(0 ,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

function createSnowflake2(){
  if(frameCount % 20 === 0){
  snowflake = createSprite(random(0 ,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg2);
  snowflake.scale = 0.1;
  }
}