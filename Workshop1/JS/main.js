var myMod = angular.module("MyModule", []);
myMod.controller("MyController", function() {
	var self = this;
	// Render first name, last name, email
	self.firstName = "";
	self.lastName = "Sharma";
	self.email = "saloni@nycda.com";

	// Toggle Edit button
	self.isEditClicked = false;

	self.onEditClick = function() {
		self.isEditClicked = !self.isEditClicked;
		// create a new variable that is equal to name
		self.firstInput = self.firstName;
		self.lastInput = self.lastName;
	};

	self.doneEdit = function() {
		self.isEditClicked = false;
		// update the variable to the input
		self.firstName = self.firstInput;
		self.lastName = self.lastInput;
	};

	self.cancelEdit = function () {
		self.isEditClicked = false;
		self.firstInput = self.firstName;
		self.lastInput = self.lastName;
	};

});
