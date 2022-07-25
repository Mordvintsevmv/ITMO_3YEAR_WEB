// Рисование при наведении мыши

var block_cursor = document.getElementById('main_light');

block_cursor.addEventListener("mousemove",(event)=>{

	var newDiv = document.createElement("div");
	block_cursor.append(newDiv);
	newDiv.style.position = "absolute";
	newDiv.style.left = event.pageX  + 'px';
	newDiv.style.top = event.pageY + 'px';
	newDiv.style.width = "10px";
	newDiv.style.height = "10px";
	newDiv.style.borderRadius = "5px";
	newDiv.style.background = "#006600";
}
);


// Рисование при нажатии кнопки

var block_button = document.getElementById('main_hard');
var mouse_down = false;

block_button.addEventListener("mousemove",(event)=>{

	if(mouse_down){	 
	var newDivB = document.createElement("div");
	block_button.append(newDivB);
	newDivB.style.position = "absolute";
	newDivB.style.left = event.pageX  + 'px';
	newDivB.style.top = event.pageY + 'px';
	newDivB.style.width = "10px";
	newDivB.style.height = "10px";
	newDivB.style.borderRadius = "5px";
	newDivB.style.background = "#CC0033";
}
}
);

block_button.addEventListener("mousedown", function(e) {
    mouse_down = true;
});

block_button.addEventListener("mouseup", function(e) {
    mouse_down = false;
});