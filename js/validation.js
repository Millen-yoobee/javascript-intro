//Find the form
var registrationForm = document.querySelector('#registration');

//Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

//   Patterns to use in validation, where username is made up of 1 word
	var usernamePattern =  new RegExp("^[a-zA-Z0-9.#_-]{3,20}$");

	var namePattern =  new RegExp("^[a-zA-Z' .-]{1,30}$");

// Get references to the input fields
	var usernameImput = document.querySelector('#username');

	var usernameMessage = document.querySelector('#username-message')

	var nameImput = document.querySelector('#full-name');
	var nameMessage = document.querySelector('#full-name-message')

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
	}








	//Stop the form from submitting
	event.preventDefault();    // To provent automatic submission, so input can be validated
}