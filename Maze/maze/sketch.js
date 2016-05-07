var cols, rows;
var w = 40;
var grid = [];
var current;


function setup() {
	frameRate(5);
  	var canvas = createCanvas(400, 400);
  	canvas.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
  	cols = floor(width/w);
  	rows = floor(height/w);

  	for (var j = 0; j < rows; j++) {
  		for (var i = 0; i < cols; i++) {
  			var cell = new Cell(i,j);
  			grid.push(cell);
  		}
  	}

  	current = grid[0];
}

function draw() {
  	background(51);
  	for (var i = grid.length - 1; i >= 0; i--) {
  		grid[i].show();
  	}

  	current.visited = true;
	var next = current.checkNeighbors();
	if(next){
		next.visited = true;
		current = next;
	}


}

function index(i, j){
	if( i < 0 || j < 0 || i > cols-1 || j > rows-1)
		return -1;
	return i+j*cols;
}

function Cell(i, j){
	this.i = i;
	this.j = j;
	this.walls = [true, true, true, true];
	this.visited = false;

	this.checkNeighbors = function () {
		var neighbors = [];

		//var index = i + j * cols;
		//index x+y.rows;
		//index x.cols+y;
		var top 	= grid[index(i  , j-1)];
		var right	= grid[index(i+1, j  )];
		var bottom 	= grid[index(i  , j+1)];
		var left 	= grid[index(i-1, j  )];

		if(top && !top.visited)
			neighbors.push(top);
		if(right && !right.visited)
			neighbors.push(right);
		if(bottom && !bottom.visited)
			neighbors.push(bottom);
		if(left && !left.visited)
			neighbors.push(left);

		if(neighbors.length > 0){
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		}else {
			return undefined;
		}

	};

	this.show = function (){
		var x = this.i*w;
		var y = this.j*w;

		if(this.visited){
			fill(255,0,100); 
			rect(x,y,w,w);
		}

		stroke(255);
		//stroke(random(100,255), 0, random(100, 255));
		if(this.walls[0])
			line(x  ,y  ,x+w,y  ); //top
		if(this.walls[1])
			line(x+w,y  ,x+w,y+w); //right
		if(this.walls[2])
			line(x+w,y+w,x  ,y+w); //bottom
		if(this.walls[3])
			line(x  ,y+w,x  ,y  ); //left
	};
}