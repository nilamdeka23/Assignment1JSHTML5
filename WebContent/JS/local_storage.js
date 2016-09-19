/**
 * 
 */
window.onbeforeunload = save;
window.onload = read;

function save() {
	localStorage.setItem("name", document.getElementById("name").value);
	localStorage.setItem("email", document.getElementById("email").value);
	localStorage.setItem("comments", document.getElementById("comments").value);
	console.log("Saved");
}

function read() {

	document.getElementById("name").value = localStorage.getItem("name") ? localStorage
			.getItem("name")
			: "";
	document.getElementById("email").value = localStorage.getItem("email") ? localStorage
			.getItem("email")
			: "";
	document.getElementById("comments").value = localStorage
			.getItem("comments") ? localStorage.getItem("comments") : "";

}