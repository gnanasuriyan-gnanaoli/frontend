var i = 0;
var iteration_slider;
function setup() {
  
  createCanvas(350 * 4, 200 * 4);
  max_iteration = 50
  iteration_slider = createSlider(10, max_iteration, max_iteration, 10);
  

  current_max_iteration = iteration_slider.value();
  
  colorMode(HSB, max_iteration);
  noStroke();
  px = 0.0;
  py = 0.0;
}


function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}

function initialize(){
  clear();
  px = 0;
  py = 0;
  max_iteration = current_max_iteration;
  // background(color(0,0,0,0), width, height, 1);
}
// function draw() {
//   if(px < width)
//   {
//     py = 0.0;
//     while(py < height){
//       // console.log(px+" "+py);
//       x0 = scaleBetween(px, -2.5, 1, 0, width) // scaled x coordinate of pixel (scaled to lie in the Mandelbrot X scale (-2.5, 1))
//       y0 = scaleBetween(py, -1, 1, 0, height) // scaled y coordinate of pixel (scaled to lie in the Mandelbrot Y scale (-1, 1))
//       
//       var iteration = 0
//       var x = 0.0
//       var y = 0.0
//       while (x*x + y*y < 4 && iteration < max_iteration){
//         xTemp = x*x - y*y + x0;
//         y = y0 + 2 * x * y;
//         x = xTemp;
//         iteration = iteration + 1;
//       }
//       console.log("iteration "+iteration+" "+px+" "+py+" "+color(iteration, 180, 180));
//       fill(color(iteration, 180, 180));
//       ellipse(px, py, 1, 1);
//       py = py +1;
//     }
//     px = px +1;
//   }
// }



function draw() {
  text('Iterations', iteration_slider.x * 2 + iteration_slider.width, 35);
  current_max_iteration = iteration_slider.value();
  if(current_max_iteration != max_iteration){
    initialize();
  }
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







    


    
    
    
    
    
    