var mySong;
var copie = [];
var amp;
var playButton;
var restartButton;

function preload(){
  font = loadFont("./assets/gt-walsheim-bold.ttf");
  mySong = loadSound("./assets/TG1_bumper.mp3");
  logo = loadImage("./assets/tg1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amp = new p5.Amplitude();
  amp.setInput(mySong);

  for (var i = 0; i < 50; i++) {
    copie[i] = new titolo();
  };

  playButton = new pB();
  restartButton = new rB();
}

function draw() {
  var sampleIsLooping = false;

  background("black");

  for (var i = 0; i < copie.length; i++) {
    copie[i].move();
    copie[i].display();
  }

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
  text("restart", 2 * (windowWidth / 3), windowHeight  - 102);
}

function titolo() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    volume = amp.getLevel();
    volume = map(volume, 0, 1, 1, 80);
    image(logo, this.x, this.y, 3 * volume, 3 * volume);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function pB() {
  this.xr = width / 3;
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
