// Draws elements on canvas
// No arguments
// No return value
// Called onload of body
function draw () {
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');

	// Background fill color
	ctx.fillStyle = "#87CEEB";
	ctx.fillRect (0, 0, 800, 600);

	// Load sprite sheet
	var oImg=document.createElement("img");
	oImg.setAttribute('src', 'assets/duckhunt.png');
	oImg.setAttribute('alt', 'na');

	// Drawing images on screen
	// Order of drawing: tree, road, dog, birdx5
	//					 sx,  sy,  sw,  sh,  dx,  dy,  dw,  dh
	ctx.drawImage(oImg,   0, 271,  72, 126,  40, 260, 144, 252);
	ctx.drawImage(oImg,   0, 714, 900, 182,   0, 418, 900, 182); 
	ctx.drawImage(oImg,   0,   0,  62,  46, 200, 440, 186, 138);
	ctx.drawImage(oImg,   0, 116,  35,  35, 400,  45,  70,  70);
	ctx.drawImage(oImg, 125, 117,  39,  33, 200, 150,  78,  66);
	ctx.drawImage(oImg, 296, 152,  40,  40, 600, 300,  80,  80);
	ctx.drawImage(oImg,  39, 236,  30,  37, 350, 270,  60,  74);
	ctx.drawImage(oImg,  76, 152,  40,  40, 620,  60,  80,  80);
}

