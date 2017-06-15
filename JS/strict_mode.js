/**
 * 
 */
// function on strict mode
function use_strict() {
	"use strict";
	try {
		txt1 = window.document.getElementById("text1").value;
		window.document.getElementById("using_strict").innerHTML = "Square root of"
				+ txt1 + " = " + Math.sqrt(txt1);
	} catch (e) {
		window.document.getElementById("using_strict").innerHTML = "<span style='color:red'>Error:</span> "
				+ e.toString();
	}
}
// function not on strict mode
function no_strict() {
	try {
		txt2 = window.document.getElementById("text2").value;
		window.document.getElementById("not_strict").innerHTML = "Square root of "
				+ txt2 + " = " + Math.sqrt(txt2);
	} catch (e) {
		window.document.getElementById("not_strict").innerHTML = "<span style='color:red'>Error:</span> "
				+ e.toString();
	}
}