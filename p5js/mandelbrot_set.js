var i = 0;
function setup() {
  max_iteration = 20
  colorMode(HSB, max_iteration);
  createCanvas(350 * 3, 200 * 3);
  noStroke();
  px = 0.0;
  py = 0.0;
  console.log(height);
  console.log(width);
  i = 0;
}


function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}

function draw() {
  if(px < width)
  {
    py = 0.0;
    while(py < height){
      // console.log(px+" "+py);
      x0 = scaleBetween(px, -2.5, 1, 0, width) // scaled x coordinate of pixel (scaled to lie in the Mandelbrot X scale (-2.5, 1))
      y0 = scaleBetween(py, -1, 1, 0, height) // scaled y coordinate of pixel (scaled to lie in the Mandelbrot Y scale (-1, 1))
      
      var iteration = 0
      var x = 0.0
      var y = 0.0
      while (x*x + y*y < 4 && iteration < max_iteration){
        xTemp = x*x - y*y + x0;
        y = y0 + 2 * x * y;
        x = xTemp;
        iteration = iteration + 1;
      }
      console.log("iteration "+iteration+" "+px+" "+py+" "+color(iteration, 180, 180));
      fill(color(iteration, 180, 180));
      ellipse(px, py, 1, 1);
      py = py +1;
    }
    px = px +1;
  }
}

// function draw(){
//   c = color( i = i+1, 0, 0);
//   fill(c);
//   ellipse(mouseX, mouseY, 10, 10);
// }

//   z = z^2 + c
//   x+iy = (x1 + iy1)^2 + (x0 + i y0)
//        = x1^2 -y1^2 +2ixy + x0 + i y0
//        = x1^2 -y1^2 + x0 + i (y0 + 2xy)
//   x = x1^2 -y1^2 + x0
//   y = y0 + 2xy







    


    
    
    
    
    
    