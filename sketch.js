
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var bottle;

function preload()
{
	dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");

}


function setup() {
  createCanvas(500, 500);

  engine = Engine.create();
	world = engine.world;

  database=firebase.database();
  
  dogSprite=createSprite(250,300);
	dogSprite.addImage(dog);
  dogSprite.scale=0.5;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  bottle = new Food(100,100,20,20);

}


function draw() {  

  
  background("rgb(173,255,47)")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dogSprite.addImage(happyDog);
    
  }
  drawSprites();
  bottle.display();

  textSize(30);
  fill("red");
  text("Press UP_ARROW to feed your pup",10,50);

}

//creating function for reading and writing our foodstock from database
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



