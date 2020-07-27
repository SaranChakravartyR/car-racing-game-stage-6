var form,player,game,allplayers,distance = 0;
var car1,car2,carset=[];
var gamestate = 0, playercount = 0;
var database;
var carIMG1,carIMG2,trackIMG;

function preload(){
    carIMG1 = loadImage("images/car2.png");
    carIMG2 = loadImage("images/car4.png");
    trackIMG = loadImage("images/track.jpg");

}


function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();
}

function draw(){
    if(playercount === 2){
        game.updategamestate(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
    if(gamestate === 2){
        game.end();
    }
}