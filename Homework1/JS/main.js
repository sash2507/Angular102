// HOMEWORK - UI theme picker
var myMod = angular.module("MyModule", []);

myMod.controller("MyController", function() {
	var self = this;

// Radio input variables 
	// Initialize ng-model with an empty string
	self.colorSelected = "";

	// Create array to reference classes individually - this feeds into ng-value 
	self.redTheme = ["bodyRed", "divOneRed", "divTwoRed", "textColorRed"];
	self.pinkTheme = ["bodyPink", "divOnePink", "divTwoPink", "textColorPink"];
	self.orangeTheme = ["bodyOrange", "divOneOrange", "divTwoOrange", "textColorOrange"];
	self.yellowTheme = ["bodyYellow", "divOneYellow", "divTwoYellow", "textColorYellow"];
	self.defaultTheme = ["defaultBody", "defaultDivOne", "defaultDivTwo"];
	
// ng-value with an object
	// self.Red = {
	// 	// bodyRed: true,
	// 	// divOneRed: true,
	// 	// divTwoRed: true,
	// 	// textColorRed: true
	// }
	// self.Pink = {
	// 	bodyPink: true,
	// 	divOnePink: true,
	// 	divTwoPink: true,
	// 	textColorPink: true
	// }
	// self.Orange = {
	// 	bodyOrange: true,
	// 	divOneOrange: true,
	// 	divTwoOrange: true,
	// 	textColorOrange: true
	// }
	// self.Yellow = {
	// 	bodyYellow: true,
	// 	divOneYellow: true,
	// 	divTwoYellow: true,
	// 	textColorYellow: true
	// }

});