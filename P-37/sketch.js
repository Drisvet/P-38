var person,shell;
var sand;

function preload() 
{
    sand = loadImage("images/sand.jpg")

}

function setup() 
{
createCanvas(500,500);

person = createSprite(250,250,10,25)

collect=createButton("Collect Seashell");
collect.position(700,95);
collect.mousePressed(collectSeashell);
}

function collectSeashell(){
    seashell.Obj.updateSeashellStock(foodObj.getSeashellStock()-1);
    database.ref('/').update({
      seashell:seashellObj.getSeashellStock(),
      CollectTime:hour()
}

function draw(){
    background(46,139,87)

    drawSprites();
    noStroke();
    display();
    textSize(20)
    fill("white")
}