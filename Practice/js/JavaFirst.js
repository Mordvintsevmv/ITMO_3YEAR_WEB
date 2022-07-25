var x=prompt('Введите x:');
var y=prompt('Введите y:');
var z=prompt('Введите z:');

if (x >= y && x >= z) {
	alert('x('+x+') Самое большое число!');
	if (x == y) {alert('y=x')};
	if (x == z) {alert('z=x')};
}

else if (y >= x && y >= z) {
	alert('y('+y+') Самое большое число!');
	if (y == x) {alert('x=y')};
	if (y == z) {alert('z=y')};
}

else if (z >= x && z >= y) {
	alert('z('+z+') Самое большое число!');
	if (z == y) {alert('y=z')};
	if (z == x) {alert('x=z')};
}


function bigger(x,y,z) {

	big = 0;		

if (x >= y && x >= z) {
	big=x;
	return (big);
}

else if (y >= x && y >= z) {
	big=y;
	return (big);
}

else if (z >= x && z >= y) {
	big=z;
	return (big);
}

}


alert('(Функция) Самое большое число: ' + bigger(x,y,z));