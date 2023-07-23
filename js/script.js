var x = "Hello World";
var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	b();
}
function b () {
	console.log("b:message = " + message);
}
a();

var first_name = "Hamza";
console.log(first_name);

var string = "Hello";
string += " World";
console.log(string + "!");
console.log((5 + 4)/ 3);
//console.log(undefined/ 3);


// better way obkect literal
var facebook = {
	name: "Facebook",
	ceo: {
		first_name: "Mark",
		favColor: "blue"
	},
	$stock: 110
};
console.log(facebook);

function mult(x,y) {
	return x * y;
}

console.log(mult(5, 3));
mult.ver = "v.1.0.0";
console.log(mult.ver);

function makemult(mult) {
	var myFunc = function (x) {
		return mult * x;
	};
	return myFunc;
}

var mulb3 = makemult(3);
console.log(mulb3(10));
function doOperOn(x, operation) {
	return operation(x);
}
var result = doOperOn(5, mulb3);
console.log(result);

function test() {
	console.log(this);
	this.myName = "Mehdi";
}
test();
console.log(window.myName);




function Circle (radius) {
	this.radius = radius;
}
Circle.prototype.getArea = function () {
	return Math.PI * Math.pow(this.radius, 2);
}
var myCircle = new Circle(10);
console.log(myCircle.getArea());

//Arrays

var array = new Array();
array[0] = "Mehdi";
array[1] = 2;
array[2] = function(name) {
	console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};
console.log(array);

//shorthand
var names =[
{
	name: "Yaakov"
},
{
	name: "Hamza"
},
{
	name: "Mehdi"
}]
console.log(names);



var names2 = ["Hamza", "Mehdi", "Syed"];

for( var name in names2){
	console.log("Hello " + names2[name]);
}



//Closures
function makemuli(muli) {
	return (
		function (x) {
			return muli * x;
		}
	);
}
var doub = makemuli(2);
console.log(doub(10));