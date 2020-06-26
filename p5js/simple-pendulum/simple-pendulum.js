var length = 200;
var g = 1
var t = 0
function setup(){
  x = createCanvas(450, 400);
  x.center();
}

function draw(){
  background(244);
  create_pendulum1(150, 'red');
  create_pendulum1(200, 'blue');
  create_pendulum1(100, 'green');
  create_pendulum(200, 'yellow', PI/2);
}

function create_pendulum1(length, color){
  create_pendulum(length, color, 1)
}

function create_pendulum(length, color, max_angle){
  angular_displacement = sqrt(g/length);
  angle = max_angle * cos(angular_displacement * t++/10);

  x = width/2 + length * sin(angle);
  y = length * cos(angle);
  
  stroke(0, 111);
  line(width/2, 0, x, y);
  noStroke();
  fill(color);
  ellipse(x, y, 30);
}