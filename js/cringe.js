class Cringe {
	constructor(context, x, y, radius) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.filesLoaded = 0;
		this.loadImages();
		this.colorList = ["#ff0", "#fc3", "#f93", "#d90", "#f75", "#9e6"];

		this.shapeIndex = 0;
		this.sgIndex = 0;
		this.mouthIndex = 0;
		this.color = 0;
		
	}
	loadImages() {
		this.sunglasses = [];
		this.mouths = [];
		for (var i = 1; i < 7; i++) {
			var temp = new Image();
			var src = "images/sunglasses" + i + ".png";
			var loader = this;
			temp.onload = function(){
			    loader.filesLoaded++;
			    console.log("Cringe: " + src + " loaded");
			};
			temp.src = src;
			this.sunglasses.push(temp);
		}
		for (var i = 1; i < 4; i++) {
			var temp = new Image();
			var src = "images/mouth" + i + ".png";
			var loader = this;
			temp.onload = function(){
			    loader.filesLoaded++;
			    console.log("Cringe: " + src + " loaded");
			};
			temp.src = src;
			this.mouths.push(temp);
		}
	}
	isLoaded() {
		console.log("files loaded = " + this.filesLoaded);
		if (this.filesLoaded == 9) {
			this.draw();
			return true;
		}
		return false;
	}
	setShape (i) {
		this.shapeIndex = i;
		this.draw();
	}
	setSunglasses (i) {
		this.sgIndex = i;
		this.draw();
	}
	setMouth (i) {
		this.mouthIndex = i;
		this.draw();
	}
	setColor (newColor) {
		this.color = newColor;
		this.draw();
	}
	draw() {
		this.context.clearRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
		this.drawShape();
		this.drawSunglasses();
		this.drawMouth();
	}
	drawShape() {
		this.context.beginPath();
		this.context.fillStyle = this.colorList[this.color];
		if (this.shapeIndex == 0) {
			this.context.moveTo(this.x + this.radius, this.y);
			for (var i = 1; i < 360; i++) {
				var rad = i * Math.PI / 180;
				this.context.lineTo(this.x + Math.cos(rad) * this.radius, this.y - Math.sin(rad) * this.radius);
			}
		}
		else if (this.shapeIndex == 1) {
			this.context.moveTo(this.x + this.radius * 0.9, this.y);
			for (var i = 1; i < 360; i++) {
				var rad = i * Math.PI / 180;
				var r = this.radius * (0.9 + 0.2 * Math.pow(Math.sin(2 * rad), 2));
				this.context.lineTo(this.x + Math.cos(rad) * r, this.y - Math.sin(rad) * r);
			}
		}
		else {
			this.context.moveTo(this.x + this.radius * 0.9, this.y);
			for (var i = 1; i < 360; i++) {
				var rad = i * Math.PI / 180;
				var r = this.radius * (0.8 + 0.2 * Math.pow(Math.sin(1.5 * (rad + Math.PI / 2)), 2) - 0.1 * Math.sin(rad));
				this.context.lineTo(this.x + Math.cos(rad) * r, this.y - Math.sin(rad) * r);
			}
		}
		this.context.closePath();
		this.context.fill();
	}
	drawSunglasses() {
		if (this.sgIndex == -1) {
			console.log("No sunglasses selected");
		}
		else {
		var temp = this.sunglasses[this.sgIndex];
		var scale = this.radius * 2 / temp.width;
		var width = temp.width * scale;
		var height = temp.height * scale;
		var x = this.x - this.radius;
		var y = this.y - height / 2;
		this.context.drawImage(temp, x, y, width, height);
		}
	}
	drawMouth() {
		if (this.mouthIndex == -1) {
			console.log("No mouth selected");
		}
		else {
		var temp = this.mouths[this.mouthIndex];
		var scale = this.radius / temp.width;
		var width = temp.width * scale;
		var height = temp.height * scale;
		var x = this.x - this.radius / 2;
		var y = this.y + this.radius / 3 + height / 2;
		this.context.drawImage(temp, x, y, width, height);
		}
	}
}







