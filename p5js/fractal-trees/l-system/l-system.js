// variables : X F
// constants : + − [ ]
// start : X
// rules : (X → F+[[X]-X]-F[-FX]+X), (F → FF)
// angle : 25°

angle = 0;
current_sentence = 'X';
length = 200

count = 0;
rules = {
  'X': 'F+[[X]-X]-F[-FX]+X',
  'F': 'FF'
}

function setup() {
  createCanvas(600, 600).center();
  background(51);
  angle = radians(25);
  button = createButton('Generate');
  button.style('width: 200px; height: 30px;');
  button.mousePressed(generate);
  reset_button = createButton('Reset');
  reset_button.style('width: 200px; height: 30px;');
  reset_button.mousePressed(initialize);
}

function initialize(){
  count = 0;
  background(0);
  current_sentence = 'X';
  resetMatrix();
  length = 200

}
function generate(){
  if(count > 6)
    return;
  length *= 0.5  ;
  new_sentence = '';
  for(i = 0; i < current_sentence.length; i++){
    if(rules[current_sentence.charAt(i)] != undefined)
      new_sentence += rules[current_sentence.charAt(i)]
    else {
      new_sentence += current_sentence.charAt(i)
    }
  }
  current_sentence = new_sentence;
  console.log(current_sentence);
  turtle();
}

//F means "draw forward"
//− means "turn left 25°"
//+ means "turn right 25°"
//X does not correspond to any drawing action and is used to control the evolution of the curve
//"[" corresponds to saving the current values for position and angle, 
//    which are restored when the corresponding "]" is executed.

function turtle(){
  resetMatrix();
  translate(100, height);
  rotate(angle);
  strokeWeight(2);
  if(count < 3)
    strokeWeight(4);
  point(0,0);
  stroke(100, 255, 100, 200);

  count++;  
  for(i = 0; i < current_sentence.length; i++){
    // stroke(100, 255, 100, 200);
    switch (current_sentence.charAt(i)) {
      case 'F':
        line(0, 0, 0, -length);
        translate(0, -length);
        break;
      case '[':
        push();
        break;
      case ']':
        pop();
        break;
      case '-':
        rotate(angle);
        break;
      case '+':
        rotate(-angle);
        break;
      default:
        break;
    }
  }
}
