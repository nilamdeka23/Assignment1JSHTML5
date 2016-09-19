/**
 * 
 */
function check() {
	var firstNum = window.document.getElementById("first_number").value;
	var secondNum = window.document.getElementById("second_number").value;
	var thirdNum = window.document.getElementById("third_number").value;

	if (!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {

		var numbers = [ firstNum, secondNum, thirdNum ];
		numbers.sort();

		if ((Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2)) === Math.pow(
				numbers[2], 2)) {
			window.document.getElementById("result").innerHTML = "Since "
					+ numbers[0] + "<sup>2</sup> + " + numbers[1]
					+ "<sup>2</sup> == " + numbers[2]
					+ "<sup>2</sup>. They are Pythagorean triplets";
		} else {
			window.document.getElementById("result").innerHTML = "As "
					+ numbers[0]
					+ "<sup>2</sup> + "
					+ numbers[1]
					+ "<sup>2</sup> < "
					+ numbers[2]
					+ "<sup>2</sup> . They are <span style=\"color:red\">NOT</span> Pythagorean triplets";
		}

	} else {
		window.document.getElementById("result").innerHTML = "<span style=\"color: red\">Please enter valid inputs!</span>";
	}

}