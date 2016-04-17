//This version does live validation;
// i.e. immediately validates every entry without submitting

//Find the form
var registrationForm = document.querySelector('#registration');


// Get references to the input fields
var usernameInput = document.querySelector('#username');

var usernameMessage = document.querySelector('#username-message');

var nameImput = document.querySelector('#full-name');
var nameMessage = document.querySelector('#full-name-message');

var campusOptions = document.querySelectorAll('[name=campus]');
var campusMessage = document.querySelector('#campus-message');

var messageInput = document.querySelector('#message');
var messageMessage = document.querySelector('#message-message');

//Listen for the blur event on the sername
usernameInput.onblur = function(){

	// crate a fake list of usernames that are in use
	var usernames = ["admin", "user", "test", "ben.abbott"];

	//check if the username is in use
	if ( usernames.indexOf( this.value.toLowerCase() ) >= 0 ) 
	{
		usernameMessage.innerHTML = "Username is already in use";
	} 
	else if (this.value.length < 3) 
		{
		usernameMessage.innerHTML = "Username must be at least 3 characters";
		} 
		else if ( this.value.length > 20) 
		{
			usernameMessage.innerHTML = "Username must be at most 20 characters";
		} 
		else if (usernamePattern.test( this.value)) {
		// Hide any existing messages
		usernameMessage.innerHTML = '';
	}  //closing tag of the if section 
		else {
		//  Display an error message to the user
		usernameMessage.innerHTML = 'Invalid username';
		}

}  //closing tag of function()

messageInput.onkeyup = function() 
{
	var totalLetters = this.value.length;
	messageMessage.innerHTML = totalLetters + "/240";
}















// All codes from here down now no longer needed for live validation

// //Wait for the user to submit the form
// registrationForm.onsubmit = function(event) {

// //count how many errors there are
// 	var totalErrors = 0;

// //   Patterns to use in validation have been moved to patterns.js file


// //to show all (default?) properties of var campusOptions
// 	console.log(campusOptions);

// //Check the username
// 	if( usernamePattern.test( usernameImput.value)) {
// //username is valid
// 		console.log("username is valid");
// 		usernameMessage.innerHTML = "";		
// 	}
// 	else {
// //username is invalid
// 		console.log("username is invalid");
// 		usernameMessage.innerHTML = "username is invalid";
// 		totalErrors++;
// 	}

// //Check the full-name
// 	if( namePattern.test( nameImput.value)) {
// //full-name is valid
// 		console.log("full name is valid");
// 		nameMessage.innerHTML = "";		
// 	}
// 	else {
// //username is invalid
// 		console.log("full name is invalid");
// 		nameMessage.innerHTML = "full name is invalid";
// 		totalErrors++;
// 	}

// //loop over all the campus options
// 	var campusIsSelected = false;
	
// 	for (var i=0; i<campusOptions.length; i++) {
// //check if this campus has been selected
// 		if (campusOptions[i].checked) {
			
// 			campusIsSelected = true;
// 		}
// 	}
// // if campusIsSelected is still false
// 	if (campusIsSelected == false) {
// 		campusMessage.innerHTML = "Pleae select a campus";
// 		totalErrors++;		}
// 	else {
// 		campusMessage.innerHTML = "";
// 	}

// //  if there is any error
// 	if (totalErrors > 0) {
//  //Stop the form from submitting
// 		event.preventDefault();    //but itself, prevents automatic form submission, so input can be validated
// 	}

// }