var mySong;
var amp;

function preload() {
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

}

function draw() {
  background("black");

  imageMode(CENTER);
  volume = amp.getLevel();
  volume = map(volume, 0, 1, 1, 5);
  image(logo, windowWidth / 2 * volume, windowHeight / 2, 100 / 3, 71 / 3);

  imageMode(CENTER);
  image(trumpp, windowWidth / 2 - 510, windowHeight / 2 - 20, 706 / 2.5, 672 / 2.5);

  imageMode(CENTER);
  image(trumpet, windowWidth / 2 - 180, windowHeight / 2 + 20, 640 / 1.5, 210 / 1.5);

  rectMode(CENTER);
  noStroke();
  fill(color("#37123C"));
  rect(windowWidth / 3, windowHeight - 100, 90, 30);

  rect(2 * (width / 3), windowHeight - 100, 90, 30);

  textAlign(CENTER, CENTER);
  textSize(10);
  fill(color("white"));
  textFont(font);
  text("play/pause", windowWidth / 3, windowHeight - 102);

  textAlign(CENTER, CENTER);
  textSize(10);
  fill(color("white"));
  textFont(font);
  text("refresh", 2 * (windowWidth / 3), windowHeight - 102);
}


function mousePressed() {
  if (mouseX > windowWidth / 3 - 45 && mouseX < windowWidth / 3 + 45 && mouseY > windowHeight - 115 && mouseY < windowHeight - 85) {
    if (!mySong.isPlaying()) {
      mySong.play();
    } else {
      mySong.pause();
    }
  } else if (mouseX > 2 * (width / 3) - 45 && mouseX < 2 * (width / 3) + 45 && mouseY > windowHeight - 115 && mouseY < windowHeight - 85) {
    document.location.reload();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
