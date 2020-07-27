class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref = database.ref('gameState')
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    updategamestate(state){
        var gamestateref = database.ref('/')
        gamestateref.update({
            gameState: state
        })
    }
    start(){
       if(gamestate === 0){
           player = new Player();
           player.getplayercount();
           form = new Form();
           form.display();    
       }

       car1 = createSprite(100,200);
       car1.addImage(carIMG1);
       car2 = createSprite(300,200);
       car2.addImage(carIMG2);
       carset = [car1,car2];
    }
    play(){
        form.hide();
        //imageMode(CENTER);
        text("START",120,100);
        Player.getallplayersinfo();
        if(allplayers!== undefined){
            image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5);
            var positionY;
            var positionX = 550;
            var I = 0;
            for(var plr in allplayers){
                positionY = displayHeight -allplayers[plr].distance 
                carset[I].y = positionY;
                carset[I].x = positionX;
                I = I+1;
                positionX = positionX + 500;
                if(I === player.index){
                    carset[I-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = positionY;
                    stroke("red");
                    rectMode(CENTER);
                    rect(carset[I-1].x,carset[I-1].y,60,100);
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null ){
            player.distance = player.distance + 20;
            player.updateplayerinfo();
        }

        if(player.distance === 4000){
            gamestate = 2;
        }
        drawSprites();
    }
    end(){
        console.log(" GAME OVER ");
        game.updategamestate(2);
    }
    
}