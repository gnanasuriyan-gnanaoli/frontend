var length = 200;
var g = 1
var t = 0
var offset = 20
var color_map = { 'red': {'r': 255, 'g': 0, 'b':0, 'a': 150 },
  'blue': {'r': 0, 'g': 0, 'b': 255, 'a': 150 },
  'green': {'r': 0, 'g': 255, 'b':0, 'a': 150 },
  'yellow': {'r': 255, 'g': 255, 'b':0, 'a': 150 }
}
function setup(){

  createCanvas(900, 475).position(140, 0, 'absolute');

  red_length_slider = createSlider(100, 450, 100, 50);
  blue_length_slider = createSlider(100, 450, 150, 50);
  green_length_slider = createSlider(100, 450, 200, 50);
  yellow_length_slider= createSlider(100, 450, 200, 50);

  red_length_slider.position(0, 0);
  blue_length_slider.position(0, 20);
  green_length_slider.position(0, 40);
  yellow_length_slider.position(0, 60);
  
  red_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  blue_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  green_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  yellow_angle_slider= createSlider(1, 3 * PI/5, PI/2, 0.1);
  red_angle_slider.position(0, height-80);
  blue_angle_slider.position(0, height-60);
  green_angle_slider.position(0, height-40);
  yellow_angle_slider.position(0, height-20);

}

function draw(){
  background(225);
  fill('red');
  text('Red Length '+red_length_slider.value(), red_length_slider.x, red_length_slider.y+10);
  text('Red Angle '+red_angle_slider.value(), red_angle_slider.x, red_angle_slider.y+10);

  fill('blue');
  text('blue Length '+blue_length_slider.value(), blue_length_slider.x, blue_length_slider.y+10);
  text('blue Angle '+blue_angle_slider.value(), blue_angle_slider.x, blue_angle_slider.y+10);

  fill('green');
  text('green Length '+green_length_slider.value(), green_length_slider.x, green_length_slider.y+10);
  text('green Angle '+green_angle_slider.value(), green_angle_slider.x, green_angle_slider.y+10);

  fill('yellow');
  text('yellow Length '+yellow_length_slider.value(), yellow_length_slider.x, yellow_length_slider.y+10);
  text('yellow Angle '+yellow_angle_slider.value(), yellow_angle_slider.x, yellow_angle_slider.y+10);
  
  
  
  
  
  create_pendulum(red_length_slider.value(), 'red', red_angle_slider.value());
  create_pendulum(blue_length_slider.value(), 'blue', blue_angle_slider.value());
  create_pendulum(green_length_slider.value(), 'green', green_angle_slider.value());
  create_pendulum(yellow_length_slider.value(), 'yellow', yellow_angle_slider.value());
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
  line(width/2, offset, x, y);
  noStroke();
  fill(color_map[color].r, color_map[color].g, color_map[color].b, color_map[color].a);
  ellipse(x, y, 30);
}
