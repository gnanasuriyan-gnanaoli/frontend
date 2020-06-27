var tree = [];
var length = 200;
var angle;
var count = 0;
function setup() {
  createCanvas(800, 800).center();
  background(51);
  angle = PI/8;
  v1 = createVector(width/2, height);
  v2 = createVector(width/2, height-length);
  tree[0] = new Branch(v1, v2);
}

function drawBranch(){
  length = tree.length;
  for(i = length-1; i >= 0 && !tree[i].finished; i--){
    console.log(count++);
    tree.push(tree[i].branch(angle));
    tree.push(tree[i].branch(-angle));
    tree[i].finished = true;
  }
}
function mousePressed(){
  drawBranch();
}

function draw() {
  background(51);
  for(i = 0; i < tree.length; i++){
    tree[i].show();
  }
}


