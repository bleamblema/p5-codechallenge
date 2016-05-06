var cells = [];

function setup() {
  	createCanvas(600, 400);
  	for (var i = 0; i < 4; i++) {
	  	cells.push( new Cell() );
 	}
}

function draw() {
	background(51);  
	for (var i = 0; i < cells.length ; i++) {
		cells[i].move();
		cells[i].show();
	}
}

function mousePressed(){
	for (var i = cells.length-1; i >= 0; i--) {
		if(cells[i].clicked(mouseX, mouseY)){
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
			cells.splice(i, 1);
		}
	}

}

function Cell(pos, r, c) {
	if(pos)
		this.pos = pos.copy();
	else
		this.pos = createVector(random(width), random(height));
	this.r = r || 80;
	this.c = c || color(random(100, 255), 0, random(100, 255), 100);

	this.clicked = function(x, y){
		var d = dist(this.pos.x, this.pos.y , x, y);
		if(d < this.r)
			return true;
		else
			return false;
	};

	this.mitosis = function() {
		this.pos.x += random(-this.r,this.r);
		var cell = new Cell(this.pos, this.r/2, this.c);
		return cell;
	};

	this.move = function() {
		var vel = p5.Vector.random2D();
		this.pos.add(vel);
	};

	this.show = function() {
		noStroke();
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	};
}