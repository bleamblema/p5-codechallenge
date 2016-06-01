function Branch(parent, pos, dir) {
	this.pos = pos;
	this.parent = parent;
	this.dir = dir;
	this.origDir = this.dir.copy();
	this.count = 0;
	this.len = 5;

	this.reset = function() {
		this.dir = this.origDir.copy();
		this.count = 0;
	};

	this.next = function() {
		this.dir.normalize();
		var nextDir = p5.Vector.mult(this.dir, this.len);
		var nextPos = p5.Vector.add(this.pos, nextDir);
		var nextBrach = new Branch(this, nextPos, this.dir.copy());
		return nextBrach;
	};

	this.show = function() {
		if(this.parent !== null){
			stroke(255);
			line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
		}

	};
}