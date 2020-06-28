//KOLAM
// axiom = (-D--D)
// A -> F++FFFF--F--FFFF++F++FFFF--F
// B -> F--FFFF++F++FFFF--F--FFFF++F
// C -> BFA--BFA
// D -> CFC--CFC
// angle = 45

current_sentence = '-D--D';
rules = {
  'A': 'F++FFFF--F--FFFF++F++FFFF--F',
  'B': 'F--FFFF++F++FFFF--F--FFFF++F',
  'C': 'BFA--BFA',
  'D': 'CFC--CFC'
}
angle = 45 * 3.141592 / 180
length = 150



//KOLAM
// axiom = F+F+F+F
// F -> F+F-F+F+F
// angle = 90
// current_sentence = 'F+F+F+F';
// rules = {
//   'F': 'F+F-F+F+F'
// }
// angle = 90 * 3.141592 / 180
// length = 150


// Hexagonal gospher
// axiom = XF
// X -> X+YF++YF-FX--FXFX-YF+
// Y -> -FX+YFYF++YF+FX--FX-Y
// angle = 60
// current_sentence = 'XF';
// rules = {
//   'X': 'X+YF++YF-FX--FXFX-YF+',
//   'Y': '-FX+YFYF++YF+FX--FX-Y'
// }
// angle = 60 * 3.141592 / 180
// length = 100



//snowflake
// axiom = F++F++F
// F -> F-F++F-F
// angle = 60


// current_sentence = 'F++F++F';
// rules = {
//   'F': 'F-F++F-F'
// }
// angle = 60 * 3.141592 / 180
// length = 50

// weed
// axiom = F
// F -> FF-[XY]+[XY]
// X -> +FY
// Y -> -FX
// angle = 22.5

// current_sentence = 'F';
// rules = {
//   'F': 'FF-[XY]+[XY]',
//   'X': '+FY',
//   'Y': '-FX'
// }
// angle = 22.5 * 3.141592 / 180
// length = 300



//bushes
// axiom = F
// F -> FF+[+F-F-F]-[-F+F+F]
// current_sentence = 'F';
// rules = {
//   'F': 'FF+[+F-F-F]-[-F+F+F]'
// }
// angle = 22.5 * 3.141592 / 180
// length = 150





//bushes
// axiom = Y
// X -> X[-FFF][+FFF]FX
// Y -> YFX[+Y][-Y]
// current_sentence = 'Y';
// rules = {
//   'X': 'X[-FFF][+FFF]FX',
//   'Y': 'YFX[+Y][-Y]'
// }
// angle = 25.7 * 3.141592 / 180
// length = 350

//fractal-plants
//length = 200
//angle = 25 * 3.141592 /180
//current_sentence = 'X';
// rules = {
//   'X': 'F+[[X]-X]-F[-FX]+X',
//   'F': 'FF'
// }

function setup() {
  createCanvas(600, 650).center();
  background(0);
  button = createButton('Generate');
  button.style('width: 200px; height: 30px;');
  button.mousePressed(generate);
  reset_button = createButton('Reset');
  reset_button.style('width: 200px; height: 30px;');
  reset_button.mousePressed(initialize);
}

function initialize(){
  background(0);
  current_sentence = 'X';
  resetMatrix();
  length = 200

}
function generate(){
  length *= 0.5;
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
  background(255)
  resetMatrix();
  translate(45, height/2);
  strokeWeight(2);
  stroke(255,0,0);
  // stroke(100, 255, 100, 200);
  // stroke(144, 198, 250);
  // noStroke();
  // fill(144, 198, 250);
  point(0,0);

  for(i = 0; i < current_sentence.length; i++){
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
