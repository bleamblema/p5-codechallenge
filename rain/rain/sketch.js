var drops = [];

function setup() {
	createCanvas(640, 360);  
	for(var i = 0 ; i<400 ; i++)
	{
		drops[i] = new Drop();
	}
}

function draw() {
  	background(230, 230, 250);
	for(var i = 0 ; i<drops.length ; i++)
	{
	  	drops[i].fall();
  		drops[i].show();
	}
}


function Drop() {
	this.x = random(width);
	this.y = random(-200, -100);
	this.z = random(0, 20);

	this.yspeed = map(this.z, 0, 20, 4, 10);
	this.len = map(this.z, 0,20, 10, 20);

	this.fall = function() {
		this.y = this.y + this.yspeed;
		this.yspeed += 0.03;

		if( this.y > height){
			this.y = random(-200, -100);
			this.yspeed = map(this.z, 0, 20, 4, 10);
		}
	};

	this.show = function() {
		var thick = map(this.z, 0, 20, 1, 3);
		strokeWeight(thick);

		stroke(138, 43, 226);
		line(this.x, this.y,  this.x, this.y+this.len);
	};
}