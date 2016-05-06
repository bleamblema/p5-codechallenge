var ship;
var flowers = [];
var drops = [];

function setup() {
  
  	createCanvas(600, 400);
  	ship = new Ship();
  	for(var i = 0; i < 6 ; i++)
  		flowers[i] = new Flower(i*80+80,60);
}

function draw() {
	background(51);
	ship.show();
  	for(var i = 0; i < drops.length ; i++)
  	{
  		drops[i].show();
  		drops[i].move();
  	}
  	for(var j = 0; j < flowers.length ; j++)
  		flowers[j].show();
}

function keyPressed(){
	if(key === ' '){
		drops.push( new Drop(ship.x, ship.y) );
	}
	if(keyCode === RIGHT_ARROW){
		ship.move(1);
	}else if(keyCode === LEFT_ARROW){
		ship.move(-1);
	}
}

function Ship() {
	this.x = width/2;
	this.y = height;

	this.show = function() {
		fill(255);
		rectMode(CENTER);
		rect(this.x, height-20, 20, 20);
	};
	this.move = function(dir) {
		this.x += dir * 10;
	};
}

function Flower(x, y) {
	this.x = x;
	this.y = y;
	this.show = function() {
		fill(255, 0, 200);
		ellipse(this.x, this.y, 60, 60);
	};
	this.move = function(dir) {
		this.x += dir * 10;
	};
}

function Drop(x, y) {
	this.x = x;
	this.y = y;
	this.show = function() {
		noStroke();
		fill(50, 0, 255);
		ellipse(this.x, this.y, 16, 16);
	};
	this.move = function() {
		this.y -= 5;
	};
}