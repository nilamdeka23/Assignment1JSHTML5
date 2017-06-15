/**
 * 
 */
function rightTriangle(perpendicular, base) {

	this.perpendicular = perpendicular;
	this.base = base;
	// method to compute area
	this.area = function() {
		return 1 / 2 * perpendicular * base;
	};
	// method to compute perimeter
	this.perimeter = function() {
		var perimeter = Number(perpendicular) + Number(base)
				+ Math.sqrt(Math.pow(perpendicular, 2) + Math.pow(base, 2));
		return perimeter;
	};

}

function compute() {

	var perpendicular = window.document.getElementById("perpendicular").value;
	var base = window.document.getElementById("base").value;
	var triangle = new rightTriangle(perpendicular, base);
	window.document.getElementById("area").innerHTML = "Area = "
			+ triangle.area().toFixed(3);
	window.document.getElementById("perimeter").innerHTML = "Perimeter = "
			+ triangle.perimeter().toFixed(3);
}


