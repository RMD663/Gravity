const GRAVITY = 10;
const SUN_MASS = 10;
let fontMonogram;
let camera;
let show_fps = true;
let sim_core;
let cam;
let timer = 0;


function setup() {
  createCanvas(500, 500, WEBGL);
  cam = createCamera();
  camera = new Camera();
  fontMonogram = loadFont('assets/monogram.ttf')
  textFont(fontMonogram);
  textSize(32);
  sim_core = new Core();
  keyPressed()
  let sun = new Body(0, 0, 30, "yellow", SUN_MASS);
  let earth = new Body(70, 10, 10, "blue", 5);
  earth.velocity.y = 2;
  sim_core.addBody(sun);
  sim_core.addBody(earth);

  frameRate(60.0);
}

function draw() {
  background(1);
  sim_core.render();
  sim_core.update();
  keyPressed();
  camera.drawStatus();
}

function mousePressed(){
  //cam.move(mouseX, mouseY, 0)
}

function keyPressed(){
  if(keyIsPressed === true){
    let dir_x = 0
    let dir_y = 0
    if(keyCode === LEFT_ARROW){
      dir_x = -1
    }
     if(keyCode === RIGHT_ARROW){
      dir_x = 1
    }
     if(keyCode === UP_ARROW){
      dir_y = -1
    }
     if(keyCode === DOWN_ARROW){
      dir_y = 1
    }
    cam.move(dir_x, dir_y, 0)
  }
}
