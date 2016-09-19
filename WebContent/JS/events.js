/**
 * 
 */
function handle_event(event) {
	var target = event.target;
	if (target.className === "good") {
		target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Checkmark.svg/500px-Checkmark.svg.png";
	} else {
		target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cancelled_cross.svg/2000px-Cancelled_cross.svg.png"
	}
}

function handle_mouseover(event) {
	var target = event.target;
	console.log(event.target.style);
	target.parentNode.style.borderColor = "blue";
}

function handle_mouseout(event) {
	var target = event.target;
	target.parentNode.style.borderColor = "green";
}