/**
 * 
 */
var Coffee = function() {
	this.name = "Coffee";
}

Coffee.prototype.price = 3;
Coffee.prototype.ingredients = [ "milk", "coffee", "sugar" ];

var inherit = function(subclass, baseclass) {
	subclass.prototype = Object.create(baseclass.prototype);
};

var Mocaccino = function() {
	this.name = "Mocacino";
}

inherit(Mocaccino, Coffee);

var mocaccino = new Mocaccino();
mocaccino.ingredients.push("chocolate");
mocaccino.price = 5;

var Capuccino = function() {
	this.name = "Capuccino"
}

inherit(Capuccino, Coffee);

var capuccino = new Capuccino();
capuccino.ingredients.push("cream");
capuccino.price = 7;

function incrementCount(id) {
	window.document.getElementById(id).value = Number(window.document
			.getElementById(id).value) + 1;
	updateTotal();
}

function decrementCount(id) {
	window.document.getElementById(id).value = Number(window.document
			.getElementById(id).value) - 1;
	if (window.document.getElementById(id).value < 0) {
		window.document.getElementById(id).value = 0;
	}
	updateTotal();
}

function updateTotal() {
	window.document.getElementById("total").value = Number(window.document
			.getElementById("capuccino_count").value)
			* capuccino.price
			+ Number(window.document.getElementById("mocaccino_count").value)
			* mocaccino.price;
}
