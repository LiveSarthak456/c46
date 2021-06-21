const PLAY = 1;
const END= 0;
var gameState = PLAY;


var bgImage;
var plane, planeImage;
var enemyPlane, enemyplaneImage;
var score=0;




function preload(){
bgImage = loadImage("bg.jpg");
planeImage = loadImage("plane.png");
enemyplaneImage = loadImage("enemyplane.png");
}


function setup(){
  
createCanvas(windowWidth, windowHeight);


plane = createSprite(50,180,20,20);
plane.addImage(planeImage);
plane.scale = 0.8;

enemyPlane = createSprite(400,300,20,20);
enemyPlane.addImage(enemyplaneImage);
enemyPlane.velocityX = -0.9
enemyPlane.scale = 0.2;
enemyPlane.setLifetime = 100;


enemyPlane.x = random(850,850);
enemyPlane.y = random(20,400);


}

function draw(){
background(bgImage);

stroke("blue");
fill("white");
textSize(50);
text("Score: "+ score,30,50);


if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    plane.velocityX = -(6 + 3*score/100);

    plane.y = mouseY;
    plane.x = mouseX;
}

console.log(mouseX, mouseY)

drawSprites();




}