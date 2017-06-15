/**
 * 
 */
const
ONE_DAY_IN_MILLIS = 24 * 60 * 60 * 1000;

var todaysDate = new Date();
var blackFriday = new Date(2016, 10, 26);

if (todaysDate > blackFriday) {
	blackFriday.setFullYear(blackFriday.getFullYear() + 1);
	window.document.getElementById("num_of_days").innerHTML = "Oops! You are too late for this year!";
} else {
	var numOfDays = Math.ceil((blackFriday.getTime() - todaysDate.getTime())
			/ ONE_DAY_IN_MILLIS);

	window.document.getElementById("num_of_days").innerHTML = numOfDays
			+ " Days.";
}
