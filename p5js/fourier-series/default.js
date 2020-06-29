

function record() {
  chunks.length = 0;
  let stream = document.querySelector('canvas').captureStream(30),
    recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = e => {
    recorder.stop();
    btn.textContent = 'start recording';
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = 'stop recording';
}

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement('video');
  vid.id = 'recorded'
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}

var btn;



radius = 40;
time = 0;
wave = [];
var noOfCircles;
function setup() {

  btn = document.querySelector('button'), chunks = [];
  btn.onclick = record;
  createCanvas(1000, 600);
  slider = createSlider(1, 100, 3, 1);
  noOfCircles = slider.value();
}

function draw() {
  noOfCircles = slider.value();
  background(0);
  textSize(16);
  stroke(255);
  text("No of Circles : "+slider.value(), width- 140, height-3);

  translate(width/2 - width/3, height/2);
  stroke('yellow');
  strokeWeight(2);
  noFill();

  time = time + 0.04;
  x = 0;
  y = 0;
  i = 1;
  outer_radius = 15 *8 * 4 / PI;
  for(i = 0; i < noOfCircles; i++){
    prevx = x;
    prevy = y;
    n = i * 2 +1;
    radius = 15 *8 * 4 /(n * PI);
    
    ellipse(prevx, prevy, radius*2);
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    
    stroke(255, 0, 0);
    line(prevx, prevy, x, y);
    if(i === noOfCircles -1){
     fill('yellow');
     ellipse(x, y, 10, 10);
     wave.unshift(y);
     stroke(255, 0, 0);
     line(x, y, 1.5 *outer_radius , wave[0])
    }  
  }
  beginShape();
  noFill();
  stroke(0, 0, 255);
  for(i = 0; i <= wave.length; i++){
    vertex(i + 1.5* outer_radius, wave[i]);
  }
  endShape();
  wave = wave.slice(0, 600);
}

function fourierSeries(x, n, period){
  output = 0;
  for(i = 0; i < n; i++){
    output += (4/n*PI) * sin(n* PI * x / L);
  }
}