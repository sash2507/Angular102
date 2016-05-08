// Set up the module (ng-app refers to it)
// ng-app refers to this in markup
var myMod = angular.module("MyModule", []);
// anything the view needs HAS to be on scope
myMod.controller("MyController", function() {
	var self = this;
// Checkbox, radio input, textboxes - for HW
	self.isBoxChecked = true;
	self.onUserClick = function() {
		self.isBoxChecked = !self.isBoxChecked;
	};

})

// From last week, we covered:

// ng-repeat 9/10 times use an array
// within ng-repeat - you have add'l variables like
// $first, $middle, $even, $odd, etc.

// ng-model captures what a user does: saves it inside ng-model
// the one directive that has 2-way binding

// ng-class 3 examples: string, array, object

