var length = 150;
var angle;
var fraction = 0.7;

function setup(){
  angle_slider = createSlider(0, TWO_PI, PI/12, 0.01);
  angle_slider.style('width','300px');
  createCanvas(600, 500);
  stroke(255);
}

function draw(){
  background(0);
  textSize(12);
  text('Angle (0 - 2 Pi) :'+angle_slider.value(), 0, height-3);
  angle = angle_slider.value();
  translate(width/2, height);
  branch(length);
}

function branch(length){
  if(length < 4){
    return;
  }
  strokeWeight(length * 0.05);
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
