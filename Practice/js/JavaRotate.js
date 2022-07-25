var a = document.getElementById('rotatethis');

function returnimg(a) {
	a.classList.remove("rotate-right");
    a.classList.add("rotate-back");
}

function rotateimg(a) {
	a.classList.remove("rotate-back");
    a.classList.add("rotate-right");
}


a.onclick = function() {
	rotateimg(a);
	setTimeout(function() {returnimg(a);}, 2000);
}

var b = document.getElementById('infinite');

function rotateinf(b){
    b.classList.add("infrotation");
}

b.onclick = function() {
	rotateinf(b);
}