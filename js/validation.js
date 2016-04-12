//Find the form
var registrationForm = document.querySelector('#registration');

//Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	//   alert('submitted');
	//Stop the form from submitting
	event.preventDefault();    // To provent automatic submission, and allow validation to take place first
}