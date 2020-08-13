const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground01;
var fatBoi;
var topple;
var box3;
var hugeBOI;
var box4;
var break2;
var topBox;
var leftSlant;
var rightSlant;
var getEggs;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground01 = new Ground(600, 381, 1200, 20);
    box1 = new Box(700, 320, 50, 50);
    box2 = new Box(920, 320, 50, 50);
    fatBoi = new piggy(810, 360);
    topple = new fallDown(810, 260, 270, PI / 2);
    box3 = new Box(700, 240, 50, 50);
    box4 = new Box(920, 240, 50, 50);
    hugeBOI = new piggy(810, 220);
    break2 = new fallDown(810, 180, 270, PI / 2);
    topBox = new Box(810, 160, 50, 50);
    leftSlant = new fallDown(760, 120, 120, PI / 6);
    rightSlant = new fallDown(860, 120, 120, -PI / 6);
    getEggs = new loosingFeathers(100, 100);

}

function draw() {
    background(150);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground01.display();
    fatBoi.display();
    topple.display();
    hugeBOI.display();
    break2.display();
    box3.display();
    box4.display();
    leftSlant.display();
    topBox.display();
    rightSlant.display();
    getEggs.display();

}


