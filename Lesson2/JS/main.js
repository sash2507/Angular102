// 1. call Module function - arguments: name + array
var myMod = angular.module("MyModule", []);

// 2. Create Controller - Give controller a name + a function
// Function takes one argument - the scope, very imp!
myMod.controller("MyController", function() {
	// For every controller, this is very 1st line
	var self = this;
	// Define properties as follows:
	self.greeting = "Hello Saloni";
	self.age = 12;
	self.hobby = "I love swimming";

	// ********ng-class with a string *******
	// self.textColor = "white";

	// **********ng-class with object ********
	// self.textColor = {
	// 	white: true,
	// 	yankees: true,
	// 	redSox: false
	// }

	// ********ng-class with array *********
	// self.textColor = ["white", "strong"];
	
	// ***** ng-repeat with an array ********
	// self.myArray = ["Tom", "Sally", "John", "Harry"];

	// ***** ng-repeat with an array of objects *****
	// 	self.myArray = [
	// 	{
	// 		firstName: "Tom"
	// 	}, 
	// 	{	firstName: "Sally"
	// 	},
	// 	{
	// 		firstName: "John"
	// 	},
	// 	{
	// 		firstName: "Harry"
	// 	}
	// 	]

	// });

	// *******ng-repeat with an object*******
		// self.myPerson = {
		// 	name: "Saloni",
		// 	age: 20,
		// 	zip: 20011,
		// 	state: "NY"
		// }

	// *******ng-model with TEXT inputs******
		// self.myName = " ";

	// Example of ng-model with 2-way binding
	// self.person = {
	// 	name: {
	// 		firstName: " "
	// 	}
	// };

	// ********ng-model with RADIO inputs******
	// Additional info needed in html: the VALUE when that radio button selected
	// self.petSelected = " ";

	// ng-model with RADIO inputs where values are specified
	self.myDog = {
		name: "Max"
	};
	self.myCat = {
		name: "Fluffy"
	};
	self.myPig = {
		name: "Porky"
	};

//ng-class can be given to do the following 3:
// 1. a string: adds that string as class
// 2. an object: will use keys if keys eval to true
// 3. array: will add all strings in the array

//ng-repeat is to iterate inside loops. Uses:
// 1. an array
// 2. an array of objects
// 2. object

//ng-model is used with inputs - ONLY this allows two-way binding
// 1. type = "text" 
// 2. type = "radio"

// HOMEWORK - UI theme picker
// show user 4-5 radio buttons, each has diff color 
// two divs below the buttons, if they select button
// - body bgcolor changes, div1/div2 bgcolor AND textcolor changes

});