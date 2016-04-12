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
var myName = "Millen C. Wong"; //This is an input

//How many characters are in my name
console.log(myName);
console.log(myName.length);  /*numbers of characters in myname */

//Variable that holds my age
var myAge = 22;          //This is another input
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
else if (myName.length > 10) {
	console.log("Name should be at most 10 characters. Yours has " + myName.length + " characters.");
}


// //An array (list, collection, etc) of people
// console.log(" ");
// console.log("Arrays");
var people = ["Millen", "Dani", "Zach", "Mai2"];
console.log( people );
console.log("There are " + people.length + " people.");
console.log( people [0]);   //Should display "Millen"
console.log( people [1]);   //Should display "Dani"

//Lconsole.logop over all the people in the array
//and display their name in the console.
console.log(" ");
console.log("Lessons on loop");
console.log(" ");

for (var i = 0; i < people.length; i++)   //init i to 0; loop while i < 3 (because i==0,1,2,3); i= i + 1
{
	console.log(people[i]);
}

//Tell JS to find the button with id="hello"
var helloButton = document.querySelector("#hello"); //finds id "hello" in index.html & creates its ref in the var

//Listens for clicks on the hello button
helloButton.onclick = function() {
	alert('Hi to you');
}

//A function that calculates the grand total
function calculateGrandTotal( prices) {
 	// Defines variable grandTotal and initialising value to zero
	var grandTotal = 0;
	//Loop over all the prices
	for (var i = 0; i < prices.length; i++) {
		grandTotal = grandTotal + prices[i];
	}
	//Display the grandTotal
	console.log(grandTotal);
}
//  Some shopping carts
var cart1 = [20, 15, 12, 45, 90, 198];
var cart2 = [1, 12, 4, 6, 21];

calculateGrandTotal(cart1);
calculateGrandTotal(cart2);
