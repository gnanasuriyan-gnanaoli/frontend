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

  red_length_slider = createSlider(100, 400, 100, 50);
  blue_length_slider = createSlider(100, 400, 150, 50);
  green_length_slider = createSlider(100, 400, 200, 50);
  yellow_length_slider= createSlider(100, 400, 200, 50);

  red_length_slider.position(0, offset+ 20);
  blue_length_slider.position(0, offset+ 60);
  green_length_slider.position(0, offset+ 100);
  yellow_length_slider.position(0, offset+ 140);
  
  red_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  blue_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  green_angle_slider = createSlider(1, 3 * PI/5, 1, 0.1);
  yellow_angle_slider= createSlider(1, 3 * PI/5, PI/2, 0.1);

  red_angle_slider.position(0, height-160);
  blue_angle_slider.position(0, height-120);
  green_angle_slider.position(0, height-80);
  yellow_angle_slider.position(0, height-40);

}

function draw(){
  background(225);
  fill('black');
  text('Length', offset , red_length_slider.y-15)
  text('Angle(degrees) ', offset, red_angle_slider.y-15)
  fill('red');
  textSize(16);
  
  text(red_length_slider.value(), red_length_slider.x+offset, red_length_slider.y+10);
  text(floorF(red_angle_slider.value()*180/PI), red_angle_slider.x+offset, red_angle_slider.y+10);

  fill('blue');
  text(blue_length_slider.value(), blue_length_slider.x+offset, blue_length_slider.y+10);
  text(floorF(blue_angle_slider.value()*180/PI), blue_angle_slider.x+offset, blue_angle_slider.y+10);

  fill('Green');
  text(green_length_slider.value(), green_length_slider.x+offset, green_length_slider.y+10);
  text(floorF(green_angle_slider.value()*180/PI), green_angle_slider.x+offset, green_angle_slider.y+10);

  fill('yellow');
  text(yellow_length_slider.value(), yellow_length_slider.x+offset, yellow_length_slider.y+10);
  text(floorF(yellow_angle_slider.value()*180/PI), yellow_angle_slider.x+offset, yellow_angle_slider.y+10);

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

function floorF(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
};