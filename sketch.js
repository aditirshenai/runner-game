var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var c1, c2, c3 , c4, gr,tr ;

function preload(){

  c1 = loadImage("images/163750.png");
  c2 = loadImage("images/1905342.jpg");
  c3 = loadImage("images/images(1).png");
  c4 = loadImage("images/images.png");
  gr = loadImage("images/ground.png");
  tr = loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

