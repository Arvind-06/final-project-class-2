var sky,skyImg;
var boy,boyIMG;
var book,bookIMG;
var gull,gullIMG;
var score=0;

function preload(){
skyImg = loadImage("sprites/sky-271.jpg");
boyIMG = loadImage("sprites/boy running.png");
bookIMG = loadImage("sprites/book.png");
gullIMG = loadImage("sprites/seagull.png");

}


function setup(){
createCanvas(windowWidth,windowHeight);

sky = createSprite(windowWidth/2,windowHeight/2, windowWidth,windowHeight);
sky.addImage(skyImg);

boy = createSprite(200,100);
boy.addImage(boyIMG);
boy.scale=0.3;


}

function draw(){
background(82,134,192);
//UP
/*if(keyDown("up")){
    boy.y=boy.y-10;
    console.log("accaAdaD")
}

// down
if(keyDown("down"))
{
    boy.y=boy.y+10;
}

// left
if(keyDown("left")){
    boy.x=boy.x-10;
}

//RIGHT
if(keyDown("right")){
    boy.x=boy.x+10;
}*/
//to move the boy using 
 boy.x=mouseX;
 boy.y=mouseY;
 

 //text("NUMBER OF BOOKS COLLECTED : "+ score,200,250);
 

BOOK();
seagull();

drawSprites();

}

function BOOK(){
if(frameCount % 100 === 0){
book1 = createSprite(windowWidth,400);
book1.addImage(bookIMG);
book1.scale=0.35;
book1.velocityX = -10;
book1.y = Math.round(random(10,windowHeight-20));
book1.x = Math.round(random(-10,0));
book1.x = Math.round(random(windowWidth,windowWidth+10));
}
/*if(frameCount % 150 === 0){
book2 = createSprite(10,300);
book2.addImage(bookIMG);
book2.scale=0.35;
book2.velocityX = +10;
book2.y = Math.round(random(10,windowHeight-20));
}*/


}

function seagull(){
    if(frameCount % 148 === 0){
        gull = createSprite(windowWidth+20,400);
        gull.addImage(gullIMG);
        gull.scale=0.7;
        gull.velocityX = -10; 
        gull.y = Math.round(random(20,windowHeight-20));
}
}