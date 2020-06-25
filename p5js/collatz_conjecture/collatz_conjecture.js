var m = 5;
var angle;
var length;
var currentAngle;
var currentLength;
function setup() {
  createCanvas(400, 400);
  
  angle_slider = createSlider(0.1, 1, 1, 0.01);
  angle_slider.position(0, 0);
  length_slider = createSlider(1, 20, 20  , 1);
  length_slider.position(width, 0);
  background(255);
  colorMode(HSB, 100);
  angle  = angle_slider.value();
  length = length_slider.value();
}

function draw(){
  if(currentAngle != angle_slider.value() || currentLength != length_slider.value()){
    currentAngle = angle_slider.value();
    currentLength = length_slider.value();
    length = length_slider.value();
    angle = currentAngle;
    background(255);
    for(m = 1; m <= 1000; m++)
    {
      resetMatrix();
      translate(0, height+20);
      collatz(m);
    }
  }
}

function collatz(n){
  while(n != 1){
    if(n % 2 == 0){
      n = n / 2;
      turn('left');
    }
    else{
      n = 3 * n + 1;
      turn('right');
    }
  }
}
function turn(direction){
  if(direction === 'left'){
    rotate(angle);
  }
  else {
    rotate(-angle);
  }
  // console.log(angle)
  stroke(m % 50, 100, 100, 50);
  line(0,0,0,-length);
  translate(0, -length);
}