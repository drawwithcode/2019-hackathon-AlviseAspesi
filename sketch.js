var mySong;
var copie = [];
var amp;
var playButton;
var restartButton;
var tromba;
var trump;

function preload(){
  font = loadFont("./assets/gt-walsheim-bold.ttf");
  mySong = loadSound("./assets/TG1_bumper.mp3");
  logo = loadImage("./assets/tg1.png");
  trumpet = loadImage("./assets/tromba.png");
  trumpp = loadImage("./assets/trump.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amp = new p5.Amplitude();
  amp.setInput(mySong);

  copie = new titolo();
  tromba = new Tromba();
  trump = new Trump();

  playButton = new pB();
  restartButton = new rB();
}

function draw() {
  background("black");

  copie.display();
  trump.display();
  tromba.display();

  playButton.display();
  restartButton.display();



  textAlign(CENTER, CENTER);
  textSize(10);
  fill(color("white"));
  textFont(font);
  text("play/pause", windowWidth / 3, windowHeight  - 102);

  textAlign(CENTER, CENTER);
  textSize(10);
  fill(color("white"));
  textFont(font);
  text("refresh", 2 * (windowWidth / 3), windowHeight  - 102);
}

function titolo() {
  this.x = windowWidth / 2;
  this.y = windowHeight / 2;

  this.display = function() {
    imageMode(CENTER);
    volume = amp.getLevel();
    volume = map(volume, 0, 1, 1, 5);
    image(logo, windowWidth / 2 * volume, this.y, 100 / 3, 71 / 3);
  }
}

function Trump() {
  this.x = windowWidth / 2 - 510;
  this.y = windowHeight / 2 - 20;

  this.display = function() {
    imageMode(CENTER);
    image(trumpp, this.x, this.y, 706 / 2.5, 672 / 2.5);
  }
}

function Tromba() {
  this.x = windowWidth / 2 - 180;
  this.y = windowHeight / 2 + 20;

  this.display = function() {
    imageMode(CENTER);
    image(trumpet, this.x, this.y, 640 / 1.5 , 210 / 1.5 );
  }
}


function pB() {
  this.xr = windowWidth / 3;
  this.yr = windowHeight - 100;
  this.dw = 90;
  this.dh = 30;
  this.colorr = color("#37123C");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.colorr);
    rect(this.xr, this.yr, this.dw, this.dh);
  }

  this.start = function() {
    var d = dist(mouseX, mouseY, this.xr, this.yr);
    if (d < this.dw && d < this.dh) {
      if (!mySong.isPlaying()) {
        mySong.play();
      } else {
        mySong.pause();
      }
    }
  }
}
function rB() {
  this.xr = 2 * (width / 3);
  this.yr = height - 100;
  this.dw = 90;
  this.dh = 30;
  this.colorr = color("#37123C");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.colorr);
    rect(this.xr, this.yr, this.dw, this.dh);
  }

  this.restart = function() {
    var d = dist(mouseX, mouseY, this.xr, this.yr);
    if (d < this.dw && d < this.dh) {
      document.location.reload();
    }
  }
}
function mousePressed() {
  playButton.start();
  restartButton.restart();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
