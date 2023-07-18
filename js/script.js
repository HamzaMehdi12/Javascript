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


