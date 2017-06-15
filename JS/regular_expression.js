/*
 * the club99 ID follows a unique pattern: the first three letters correspond to
 * club no. ranging from 000-199, the next letter mean if the user is male or
 * female, the fifth letter correspond to club class(business, diamond or
 * economy), the sixth letter mean if the id holder is an adult or a child
 */

var idPattern = /^[0-1][0-9]{2}[MF][BDE][AC]/i;

function verify() {
	var clubId = window.document.getElementById("club_id").value;

	if (idPattern.test(clubId)) {
		window.document.getElementById("result").innerHTML = "Your club card membership is <span style=\"color:green\">genuine.</span>";
	} else {
		window.document.getElementById("result").innerHTML = "Sorry. Your club memberhip is not <span style=\"color:red\">genuine.</span> Please contact your nearest club to avail a genuine product.";
	}
}