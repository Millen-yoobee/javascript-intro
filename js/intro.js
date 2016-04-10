//Open up the console in your browser and check if the greeting appears.
console.log("Hello world!");

/*  You have to type this at the start, and the last line below.
This is
a 
multi
line
comment. 
*/

//Variable that holds my name
var myName = "Millen C. Wong";

//How many characters are in my name
console.log(myName);
console.log(myName.length);  /*numbers of characters in myname */

//Variable that holds my age
var myAge = 22;
console.log(myAge);

//If the user is older than 21
if ( myAge < 21) {
	console.log("You need parental permission.");
}
if ( myAge >= 21) {
	console.log("You are qualifed to participate.");
}

if (myAge < 21 ) {
	console.log("You have to ask permission from your parents.")
} 
else {
	console.log("Congratulations! You have qualified.")
}
if (myAge >= 21) {
	console.log("You are qualified. We are processing your application now ...");
} 
else if (myAge >= 13) 
{	console.log("Please ask permission from your parents.");
}
else {
	console.log("You are too young.");
}

// check the length of the visitor's name
if (myName.length == 0) {
	console.log("Your name is required.");
}
else if (myName.length > 10)
	console.log("Name should be at most 10 characters. You have entered " + myName.length + " characters");
