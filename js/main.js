var cButtons = document.getElementById("buttonContainer");
var cCringe = document.getElementById("cringeContainer");

sunglassesType = new Selector(cButtons.getContext("2d"), "#20C010", "#707070", "#FF7070");
sunglassesType.addButton(20, 20, 100, 50, "Sunglasses 1");
sunglassesType.addButton(20, 80, 100, 50, "Sunglasses 2");
sunglassesType.addButton(20, 140, 100, 50, "Sunglasses 3");
sunglassesType.addButton(130, 20, 100, 50, "Sunglasses 4");
sunglassesType.addButton(130, 80, 100, 50, "Sunglasses 5");
sunglassesType.addButton(130, 140, 100, 50, "Sunglasses 6");

colorType = new Selector(cButtons.getContext("2d"), "#FFB030", "#707070", "#FF7070");
colorType.addButton(240, 20, 100, 50, "Color 1");
colorType.addButton(240, 80, 100, 50, "Color 2");
colorType.addButton(240, 140, 100, 50, "Color 3");
colorType.addButton(350, 20, 100, 50, "Color 4");
colorType.addButton(350, 80, 100, 50, "Color 5");
colorType.addButton(350, 140, 100, 50, "Color 6");

mouthType = new Selector(cButtons.getContext("2d"), "#00B0F0", "#707070", "#FF7070");
mouthType.addButton(460, 20, 100, 50, "Mouth 1");
mouthType.addButton(460, 80, 100, 50, "Mouth 2");
mouthType.addButton(460, 140, 100, 50, "Mouth 3");

shapeType = new Selector(cButtons.getContext("2d"), "#C0B0D0", "#707070", "#FF7070");
shapeType.addButton(570, 20, 100, 50, "Shape 1");
shapeType.addButton(570, 80, 100, 50, "Shape 2");
shapeType.addButton(570, 140, 100, 50, "Shape 3");


cringe = new Cringe(cCringe.getContext("2d"), 200, 200, 180);

setTimeout(waitForLoad, 100);

function waitForLoad() {
	if (cringe.isLoaded())
		startCringe();
	else
		setTimeout(waitForLoad, 100);
}

function startCringe() {
	console.log("cringe started");
	cButtons.addEventListener('click', function(event) {
		var screenX = event.pageX - cButtons.offsetLeft - cButtons.clientLeft;
	    var screenY = event.pageY - cButtons.offsetTop - cButtons.clientTop;

		if (sunglassesType.clicked(screenX, screenY)) {           // selector buttons
	    	console.log("sunglasses selector clicked");
	    	cringe.setSunglasses(sunglassesType.getSelectedIndex());
	    }
	    else if (colorType.clicked(screenX, screenY)) {           // selector buttons
	    	console.log("color selector clicked");
	    	cringe.setColor(colorType.getSelectedIndex());
	    }
	    else if (mouthType.clicked(screenX, screenY)) {           // selector buttons
	    	console.log("mouth selector clicked");
	    	cringe.setMouth(mouthType.getSelectedIndex());
	    }
	    else if (shapeType.clicked(screenX, screenY)) {           // selector buttons
	    	console.log("shape selector clicked");
	    	cringe.setShape(shapeType.getSelectedIndex());
	    }

	}, false);
}






