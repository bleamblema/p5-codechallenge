var s;
var scl = 20;
var food;

function setup() {
  frameRate(15);
  var canv = createCanvas(600, 600);
  canv.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
  s = new Snake();
  pickLocation();
  var h1 = createElement('h1', "The Snake Game");
  h1.style("margin", "0 auto");
  h1.style("text-align", "center");
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  
}

function mousePressed(){
  s.total++;
}

function draw() {
  background(51);
  if(s.eat(food)){
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl)
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }else if(keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.update = function() {
    if(this.total == this.tail.length){ //when it have tails
      for(var i=0; i< this.tail.length; i++)
        this.tail[i] = this.tail[i+1];
    }
    if(this.total >= 0)
      this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
  
    if(this.x > width-scl)
      this.x = 0;
    else if(this.x < 0)
      this.x = width-scl;
    if(this.y > height-scl)
      this.y = 0;
    else if(this.y < 0)
      this.y = height-scl;
  }

  this.show = function() {
    fill(255);
    
    for(var i=0; i < this.tail.length; i++)
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    rect(this.x, this.y, scl, scl);
  }
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      this.total++;
      return true;
    }else
      return false;
  }
  this.death = function() {
    for(var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1){
        this.total = 0;
        this.tail = [];
      }
    }
  }
} 