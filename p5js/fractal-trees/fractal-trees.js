var length = 150;
var angle;
var fraction = 0.7;

function setup(){
  angle_slider = createSlider(0, TWO_PI, PI/4, 0.01);
  createCanvas(600, 600);
  
}

function draw(){
  background(0);
  stroke(255);
  angle = angle_slider.value();
  translate(width/2, height);
  branch(length);
}

function branch(length){
  if(length < 4){
    return;
  }
  line(0, 0, 0, -length);
  translate(0, -length);

  push();
  rotate(angle);
  branch(length * fraction);
  pop();
  push();
  rotate(-angle);
  branch(length * fraction);
  pop();
}
