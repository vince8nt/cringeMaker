class Button {
	constructor(context, x, y, width, height, label, color, border) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.label = label;
		this.color = color;
		this.border = border;
		this.draw();
	}
	draw() {
		this.context.fillStyle = this.border;
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.fillStyle = this.color;
		this.context.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
		this.context.fillStyle = "#000000";
		this.context.fillText(this.label, this.x + 10, this.y + this.height / 2 + 5);
	}
	setBorder(border) {
		this.border = border;
		this.draw();
	}
	setColor(color) {
		this.color = color;
		this.draw();
	}
	setLabel(label) {
		this.label = label;
		this.draw();
	}
	getLabel() {
		return this.label;
	}
	clicked(pointerX, pointerY) {
		if (pointerX < this.x || this.x + this.width < pointerX) {
			return false;
		}
		if (pointerY < this.y || this.y + this.height < pointerY) {
			return false;
		}
		return true;
	}	
}

class Selector {
	constructor (context, color, bColor, sColor) {
		this.context = context;
		this.color = color;
		this.bColor = bColor;
		this.sColor = sColor;
		this.buttons = [];
		this.bold = -1;
	}
	addButton (x, y, width, height, text) {
		if (this.buttons.length == 0) {
			this.buttons.push(new Button(this.context, x, y, width, height, text, this.color, this.sColor));
			this.bold = 0;
		}
		else {
			this.buttons.push(new Button(this.context, x, y, width, height, text, this.color, this.bColor));
		}
	}
	setBorder(border) {
		this.bColor = border;
		for (var i = 0; i < this.buttons.length; i++) {
			if (i != this.bold)
				this.buttons[i].setBorder(this.bColor);
		}
	}
	setColor(color) {
		this.color = color;
		for (var i = 0; i < this.buttons.length; i++) {
			this.buttons[i].setColor(this.color);
		}
	}
	getSelected () {
		if (this.bold == -1)
			return "";
		return this.buttons[this.bold].getLabel();
	}
	getSelectedIndex () {
		return this.bold;
	}
	clicked (pointerX, pointerY) {
		for (var i = 0; i < this.buttons.length; i++) {
			if (this.buttons[i].clicked(pointerX, pointerY)) {
				this.buttons[this.bold].setBorder(this.bColor);
				this.bold = i;
				this.buttons[i].setBorder(this.sColor);
				return true;
			}
		}
		return false;
	}
}
