var length = 200;
var g = 1
var t = 0
function setup(){
  createCanvas(450, 400).center();
}

function draw(){
  background(244);
  create_pendulum(150, 'red');
  create_pendulum(200, 'blue');
  create_pendulum(100, 'green');
  create_pendulum(200, 'yellow', PI/2);
}

function create_pendulum(length, color, max_angle = 1){
  angular_displacement = sqrt(g/length);
  angle_at_t = max_angle * cos(angular_displacement * t++/10);
  x = width/2 + length * sin(angle_at_t);
  y = length * cos(angle_at_t);
  draw_pendulum(x,y, color)
}

function draw_pendulum(x,y, color){
  stroke(0, 111);
  line(width/2, 0, x, y);
  noStroke();
  fill(color);
  ellipse(x, y, 30);
}