var garden,rabbit, orangeleaf,redleaf;
var gardenimg, rabbitimg,carrotimg,orangeimg,redimg;

function preload(){
  gardenimg = loadImage("garden.png");
  rabbitimg = loadImage("rabbit.png");
orangeimg = loadImage("orangeLeaf.png");
appleimg = loadImage("apple.png")
redimg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenimg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitimg);


}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  drawSprites();

  var select_sprites = Math.round(random(1,3));
    if(frameCount % 80 == 0){
      if(select_sprites ==1){
        createApples();
      }
      else if(select_sprites == 2){
        createOrange();
      }
      else{
        createRed();
      }
    }
  }


function createApples(){
 
  apple = createSprite(random(50,350),40,10,10);

  apple.addImage(appleimg);
apple.scale =0.05;

apple.velocityY = 3;
apple.lifetime = 150;
}

function createOrange(){

  orangeleaf= createSprite(random(50,350),40,10,10);
orangeleaf.addImage(orangeimg)
  orangeleaf.velocityY = 3;
  orangeleaf.scale = 0.05;
  orangeleaf.lifetime = 150;
}


function createRed(){

  redleaf = createSprite(random(50,350),40,10,10);
  redleaf.addImage(redimg);
  redleaf.velocityY = 3;
  redleaf.scale = 0.05;
  redleaf.lifetime =150;
  }
