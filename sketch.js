const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,fish1,fish2;
var backgroundImg,platform;
var bird, slingshot;
var guy;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
    //guy = loadImage("sprites/fishing guy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //var fisherman = Bodies.rectangle(200,100);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 190);
    fish1 = new Fish1(810, 350);
    fish2 = new Fish2(750, 350);
    bird = new Bird(350,90);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:377, y:80});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    text("X: " + mouseX + ", Y: " + mouseY,20,30);
    //image(guy,200,100);

    ground.display();
    fish1.display();
    fish1.score();
    fish1.move();
    fish2.display();
    fish2.score();
    fish2.move();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&&bird.body.speed<1){
        bird.trajectory = [];
        slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.jpg";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}