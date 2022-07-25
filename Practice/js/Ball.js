//Вверх-вниз

var a = document.getElementById('ball1');

a.onclick = function() {
	getDown(a)
	setInterval(() => getDown(a), 2000) ;
}

function getDown(a){
	a.style.top = "340px";
	a.style.width = "70px";
	a.style.height = "70px";
	a.style.borderRadius = "35px";
	console.log("вниз");
}

function getUp(a){
	a.style.top = "10px";
	a.style.width = "50px";
	a.style.height = "50px";
	a.style.borderRadius = "25px";
	console.log("вверх");
}

a.addEventListener("transitionend", function (e){
		getUp(a);
	});

//До линии и обратно

var b = document.getElementById('ball2');
var l = document.getElementById('line');

b.onclick = function() {
	getDown2(b);
	setInterval(() => getDown2(b), 2000) ;
}

function getDown2(b){
	topBall = b.offsetTop;
	topLine = l.offsetTop;
	b.style.top = topLine - 73 + 'px';
	b.style.width = "70px";
	b.style.height = "70px";
	b.style.borderRadius = "35px";
	console.log("вниз");
}

function getUp2(a){
	b.style.top = "10px";
	b.style.width = "50px";
	b.style.height = "50px";
	b.style.borderRadius = "25px";
	console.log("вверх");
}

b.addEventListener("transitionend", function (e){
		getUp2(b);
	});

	
//На меньшую высоту

var c = document.getElementById('ball3');
var newTop = 10;

c.onclick = function() {
	getDown3(c);
	myTimer = setInterval(() => getDown3(c), 1000);
}

function getDown3(c){
	c.style.top = "340px";
	c.style.width = "70px";
	c.style.height = "70px";
	c.style.borderRadius = "35px";
	newTop = newTop + 15;
	console.log("вниз");
	if (newTop == 340){clearInterval(myTimer)}
}

function getUp3(c){
	c.style.top = newTop + 'px';
	c.style.width = "50px";
	c.style.height = "50px";
	c.style.borderRadius = "25px";
	console.log("вверх");
	
}

c.addEventListener("transitionend", function (e){
		if (newTop < 340) {getUp3(c);}
	});


// Влево и вправо и плавное вращение

var d = document.getElementById('ball4');
var block = document.getElementById('monkey');
console.log(block.style.width)

d.onclick = function() {
	getRight(d);
	mySecondTimer = setInterval(() => getRight(d), 2000);
}

function getRight(d){
	d.style.left = "700px";
	d.style.width = "70px";
	d.style.height = "70px";
	d.style.borderRadius = "35px";
	d.style.transform = "rotate(720deg)";
	console.log("вправо");
}

function getLeft(d){
	d.style.left = "50px";
	d.style.width = "50px";
	d.style.height = "50px";
	d.style.borderRadius = "25px";
	d.style.transform = "rotate(0deg)";
	console.log("влево");
	
}

d.addEventListener("transitionend", function (e){
		getLeft(d);
	});
