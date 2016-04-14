//Find the form
var registrationForm = document.querySelector('#registration');

//Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

//count how many errors there are
	var totalErrors = 0;

//   Patterns to use in validation have been moved to patterns.js file


// Get references to the input fields
	var usernameImput = document.querySelector('#username');

	var usernameMessage = document.querySelector('#username-message')

	var nameImput = document.querySelector('#full-name');
	var nameMessage = document.querySelector('#full-name-message')

	var campusOptions = document.querySelectorAll('[name=campus]');
	var campusMessage = document.querySelector('#campus-message');

//to show all (default?) properties of var campusOptions
	console.log(campusOptions);

//Check the username
	if( usernamePattern.test( usernameImput.value)) {
//username is valid
		console.log("username is valid");
		usernameMessage.innerHTML = "";		
	}
	else {
//username is invalid
		console.log("username is invalid");
		usernameMessage.innerHTML = "username is invalid";
		totalErrors++;
	}

//Check the full-name
	if( namePattern.test( nameImput.value)) {
//full-name is valid
		console.log("full name is valid");
		nameMessage.innerHTML = "";		
	}
	else {
//username is invalid
		console.log("full name is invalid");
		nameMessage.innerHTML = "full name is invalid";
		totalErrors++;
	}

//loop over all the campus options
	var campusIsSelected = false;
	
	for (var i=0; i<campusOptions.length; i++) {
//check if this campus has been selected
		if (campusOptions[i].checked) {
			
			campusIsSelected = true;
		}
	}

	if (campusIsSelected == false) {
		campusMessage.innerHTML = "Pleae select a campus";
		totalErrors++;		}
	else {
		campusMessage.innerHTML = "";
	}

	if (totalErrors > 0) {
 //Stop the form from submitting
	event.preventDefault();    //but itself, prevents automatic form submission, so input can be validated
	}


}