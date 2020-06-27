function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.jitter = function(){
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }
  this.show = function(){
    stroke(100, 255, 100);
    this.jitter();
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branch = function(angle){
    direction = p5.Vector.sub(this.end, this.begin).rotate(angle).mult(0.67);
    new_end = p5.Vector.add(this.end, direction);
    return new Branch(this.end, new_end);
  }
}