/**
 * 
 */
function submit() {
	var user = {};
	user.name = window.document.getElementById("name").value;
	user.phone = window.document.getElementById("phone").value;
	user.email = window.document.getElementById("email").value;
	user.age = window.document.getElementById("age").value;
	user.gender = window.document.getElementById("gender").value;

	var jsonObj = JSON.stringify(user);
	// print to console for output
	console.log(jsonObj);
}
