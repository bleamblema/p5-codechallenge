var cols, rows;
var w = 40;
var grid = [];


function setup() {
  	var canvas = createCanvas(400, 400);
  	canvas.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
  	cols = floor(width/w);
  	rows = floor(height/w);

  	for (var j = 0; j < rows; j++) {
  		for (var i = 0; i < cols; i++) {
  			var cell = new Cell(i,j);
  			grid.push(cell);
  		};
  	};
}

function draw() {
  	background(51);
  	for (var i = grid.length - 1; i >= 0; i--) {
  		grid[i].show();
  	};
}

function Cell(i, j){
	this.i = i;
	this.j = j;
	this.walls = [true, true, true, true];

	this.show = function (){
		var x = this.i*w;
		var y = this.j*w;
		stroke(255);
		if(this.walls[0])
			line(x  ,y  ,x+w,y  ); //top
		if(this.walls[1])
			line(x+w,y  ,x+w,y+w); //right
		if(this.walls[2])
			line(x+w,y+w,x  ,y+w); //bottom
		if(this.walls[3])
			line(x  ,y+w,x  ,y  ); //left
		
		// noFill();
		// rect(x,y,w,w);

	}
}