var m = 5;
var angle;
var length;
var currentAngle;
var currentLength;
function setup() {
  createCanvas(1000, 600);
  
  angle_slider = createSlider(0.1, 3, 0.31, 0.1);
  angle_slider.position(width+20, height/2);

  length_slider = createSlider(1, 40, 16, 1);
  length_slider.position(width+20, height/2+20);

  shrub_count_slider = createSlider(100, 1000, 500, 20);
  shrub_count_slider.position(width+20, height/2+40);
  background(255);
  colorMode(HSB, 100);
  angle  = angle_slider.value();
  length = length_slider.value();
}

function draw(){
  textSize(12);
  text('Angle '+angle_slider.value(), width-70, height/2+5);
  text('Length '+length_slider.value(), width-70, height/2+25);
  text('Shrubs '+shrub_count_slider.value(), width-70, height/2+45);
  fill(10, 10, 10);
  if(currentAngle != angle_slider.value() || currentLength != length_slider.value() || currentRootCount != shrub_count_slider.value()){
    currentAngle = angle_slider.value();
    currentLength = length_slider.value();
    currentRootCount = shrub_count_slider.value();
    length = length_slider.value();
    angle = currentAngle;
    background(255);
    for(m = 1; m <= currentRootCount; m++)
    {
      resetMatrix();
      translate(width/2, height);
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