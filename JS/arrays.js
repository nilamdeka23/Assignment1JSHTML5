/**
 * 
 */
function isGP() {
	var series = window.document.getElementById("series").value;
	// pattern to check if the input string is in the requested format
	var inputPattern=/^([0-9]+[,])+[0-9]+$/g;
	
	if (inputPattern.test(series)) {
		
		var arrayNum = series.split(',');	
		
		for(var i=0; i<arrayNum.length; i++){

			arrayNum[i]= Number(arrayNum[i]);
			
			if(arrayNum[i]===0){
				window.document.getElementById("result").innerHTML = "Please enter a valid sequence as zero can't be number in a GP!";
				return;
			}
		}
		
		if(arrayNum.length> 2) {
			
			arrayNum.sort(function(a, b){return a-b});

			for (var i = 0; i < arrayNum.length-2; i++) {
				if((arrayNum[i]/arrayNum[i+1]) != (arrayNum[i+1]/arrayNum[i+2])){
					window.document.getElementById("result").innerHTML = "<span style='color:red'>No</span>. It's not a GP";
					return;
				}
			}
			window.document.getElementById("result").innerHTML = "<span style='color:green'>Yes. It is a GP</span>";
			
		}else{
			window.document.getElementById("result").innerHTML = "<span style='color:red'>Please enter a minimum of three numbers!</span>";
		}
		
	} else{
		window.document.getElementById("result").innerHTML = "<span style='color:red'>Please enter the sequence in the requested format!</span>";
	}

}

