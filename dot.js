var canvas = document.getElementById("someCanvas");
var context = canvas.getContext("2d");

var finalMessage = document.getElementById("container");
var frames = 0;
// global variables
var interval;
var images = {
  pinkDot: "./images/pinkDot.png",
  blueDot: "./images/blueDot.svg",
  ironHack: "./images/IronHackLogo.png"
};

class Maze {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.onload = () => {
      this.draw();
    };

    this.music = new Audio();
    this.music.src = "./sounds/Jackson5.mp3";
  }
  draw() {
    mazeReader();
  }
}
class Dot {
  constructor(x, y, image) {
    this.x = x; // 209
    this.y = y; // 129
    this.width = 7; // 9
    this.height = 7; // 9
    this.touchingWall = false;
    this.culpritKey = 0;
    this.lastKey = 0;
    this.image = new Image();
    this.image.src = image;
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  touchWith(item) {
    var touch =
      this.x < item[0] + item[2] &&
      this.x + this.width > item[0] &&
      this.y < item[1] + item[3] &&
      this.y + this.height > item[1];

    if (touch) {
      //pink keys are 68, 65, 87, 83
      if (!this.culpritKey == this.lastKey) {
        this.culpritKey = 0;
        this.touchingWall = false;
      } else {
        this.culpritKey = this.lastKey;
        this.touchingWall = true;
        if (this.culpritKey === 68) {
          this.x -= 2;
        }
        if (this.culpritKey === 65) {
          this.x += 2;
        }
        if (this.culpritKey === 87) {
          this.y += 2;
        }
        if (this.culpritKey === 83) {
          this.y -= 2;
        }
        // blue starts
        if (this.culpritKey === 39) {
          this.x -= 2;
        }
        if (this.culpritKey === 37) {
          this.x += 2;
        }
        if (this.culpritKey === 40) {
          this.y -= 2;
        }
        if (this.culpritKey === 38) {
          this.y += 2;
        }
        this.culpritKey = 0;
        this.touchingWall = false;
      }
    }
  }
}

class Prize {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 23;
    this.height = 10;
    this.touchingWall = false;
    this.image = new Image();
    this.image.src = image;
    this.image.onload = () => {
      this.draw();
    };
    this.touch = new Audio();
    this.touch.src = "./sounds/JSnoTeEspera.m4a";
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  touchWith(item) {
    var touch =
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y;
    if (touch) {
      this.touch.play();
      return true;
    }
    return false;
  }
}
// instancias
let backgroundMaze = new Maze();
let pink = new Dot(9, 4, images.pinkDot);
let blue = new Dot(209, 129, images.blueDot);
let logo = new Prize(102, 59, images.ironHack);

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  backgroundMaze.draw();
  frames++;
  pink.draw();
  blue.draw();
  logo.draw();
  checkTouch();
  checkvals();
  //pink keys are 68, 65, 87, 83
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[68] &&
    pink.touchingWall === false
  ) {
    pink.x += 0.75;
    pink.lastKey = 68;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[65] &&
    pink.touchingWall === false
  ) {
    pink.x -= 0.75;
    pink.lastKey = 65;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[87] &&
    pink.touchingWall === false
  ) {
    pink.y -= 0.75;
    pink.lastKey = 87;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[83] &&
    pink.touchingWall === false
  ) {
    pink.y += 0.75;
    pink.lastKey = 83;
  }
  // pink hits wall
  if (
    backgroundMaze.keys &&
    pink.culpritKey === 68 &&
    pink.touchingWall === true
  ) {
    pink.x += 0;
    pink.lastKey = 68;
  }
  if (
    backgroundMaze.keys &&
    pink.culpritKey === 65 &&
    pink.touchingWall === true
  ) {
    pink.x -= 0;
    pink.lastKey = 65;
  }
  if (
    backgroundMaze.keys &&
    pink.culpritKey === 87 &&
    pink.touchingWall === true
  ) {
    pink.y += -0;
    pink.lastKey = 87;
  }
  if (
    backgroundMaze.keys &&
    pink.culpritKey === 83 &&
    pink.touchingWall === true
  ) {
    pink.y += 0;
    pink.lastKey = 83;
  }

  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[39] &&
    blue.touchingWall === false
  ) {
    blue.x += 0.75;
    blue.lastKey = 39;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[37] &&
    blue.touchingWall === false
  ) {
    blue.x -= 0.75;
    blue.lastKey = 37;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[40] &&
    blue.touchingWall === false
  ) {
    blue.y += 0.75;
    blue.lastKey = 40;
  }
  if (
    backgroundMaze.keys &&
    backgroundMaze.keys[38] &&
    blue.touchingWall === false
  ) {
    blue.y -= 0.75;
    blue.lastKey = 38;
  }
  // pink hits wall
  if (
    backgroundMaze.keys &&
    blue.culpritKey === 39 &&
    blue.touchingWall === true
  ) {
    blue.x += 0;
    blue.lastKey = 39;
  }
  if (
    backgroundMaze.keys &&
    blue.culpritKey === 37 &&
    blue.touchingWall === true
  ) {
    blue.x -= 0;
    blue.lastKey = 37;
  }
  if (
    backgroundMaze.keys &&
    blue.culpritKey === 87 &&
    blue.touchingWall === true
  ) {
    blue.y += -0;
    blue.lastKey = 87;
  }
  if (
    backgroundMaze.keys &&
    blue.culpritKey === 83 &&
    blue.touchingWall === true
  ) {
    blue.y += 0;
    blue.lastKey = 83;
  }
}

function start() {
  if (interval) return;
  frames = 0;
  interval = setInterval(update, 60 / 60);
  window.addEventListener("keydown", function(e) {
    backgroundMaze.keys = backgroundMaze.keys || [];
    backgroundMaze.keys[e.keyCode] = true;
  });
  window.addEventListener("keyup", function(e) {
    backgroundMaze.keys[e.keyCode] = false;
  });
}

function checkvals() {
  if (frames % 100 === 0) {
    console.log(pink.touchingWall);
  }
}

function checkTouch() {
  oddRowCtx.forEach(function(lineOrSquare) {
    pink.touchWith(lineOrSquare);
  });
  oddRowCtx.forEach(function(lineOrSquare) {
    blue.touchWith(lineOrSquare);
  });
  evenRowCtx.forEach(function(lineOrSquare) {
    pink.touchWith(lineOrSquare);
  });
  evenRowCtx.forEach(function(lineOrSquare) {
    blue.touchWith(lineOrSquare);
  });
  if (logo.touchWith(pink)) {
    gameOver("ROSA");
    // temporary fix for styling bug
  }
  if (logo.touchWith(blue)) {
    gameOver("AZUL");
  }
}

function gameOver(winnerNameString) {
  clearInterval(interval);
  let winner = winnerNameString;
  if (winner === "ROSA") {
    context.fillStyle = "pink";
  } else {
    context.fillStyle = "LightBlue";
  }

  var message = `¡HA GANADO ${winner} !`;
  var message2 = "Retrocede la página para crear otro laberinto";
  var message3 = "Refresca la página para jugar con el mismo laberinto";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "bold 25px Indie Flower";

  context.fillText(message, 0, 30);
  context.fillStyle = "white";
  context.font = "bold 12px Indie Flower";
  context.fillText(message2, 0, 60);
  context.fillText(message3, 0, 90);

  interval = null;
  backgroundMaze.music.pause();
}

addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    start();
  }

  if ((e.keyCode = "Enter")) {
    start();
    backgroundMaze.music.play();
  }
});
