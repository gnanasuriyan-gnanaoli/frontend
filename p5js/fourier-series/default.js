radius = 40;
time = 0;
wave = [];
function setup() {
  createCanvas(400, 400).center();
}

function draw() {
  background(0);
  translate(width/2 -100, height/2);
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, radius*2);
  time = time + 0.05;
  
  line(0, 0, radius * cos(time), radius * sin(time));
  fill(255);
  ellipse(radius * cos(time), radius * sin(time), 8)
  wave.unshift(radius * sin(time));
  line(radius * cos(time), radius * sin(time), 2*radius, wave[0])
  beginShape();
  noFill();
  for(i = 0; i <= wave.length; i++){
    vertex(i + 2* radius, wave[i]);
  }
  endShape();

}

function fourierSeries(x, n, period){
  output = 0;
  for(i = 0; i < n; i++){
    output += (4/n*PI) * sin(n* PI * x / L);
  }
}