class person {
    constructor(x,y){
        super(x,y,50,50)
    }
}

if(allPlayers !== undefined){
    image(sand,0,-displayHeight*4,displayWidth,displayHeight*5);

    if (index === player.index){
        person[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = person[index-1].y
      }
}