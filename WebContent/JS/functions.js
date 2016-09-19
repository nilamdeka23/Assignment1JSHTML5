/**
 * 
 */
// arbitrary-threshold value
const
BIO_HAZARD = 200;
function check() {
	var apartmentSize = window.document.getElementById("apartment_size").value;
	var numOfOccupants = window.document.getElementById("num_of_occupants").value;
	// basic validation
	if (!isNaN(apartmentSize) && !isNaN(numOfOccupants) && (numOfOccupants > 0)) {
		window.document.getElementById("result").innerHTML = isBioHazard(
				apartmentSize, numOfOccupants);
	} else {
		window.alert("Please enter a valid input");
	}
}

function isBioHazard(apartmentSize, numOfOccupants) {
	return apartmentSize / numOfOccupants > BIO_HAZARD ? "<span style='color:green'>Fortunately NOT. You live in a safe environment</span>" : "<span style='color:red'>You are in a potential BioHazard situation.</span>";
}
