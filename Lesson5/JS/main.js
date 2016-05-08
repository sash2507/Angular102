// Controllers, factory, etc. inside NEW box
// angular.module("MyModule", ["MyServices"])

// This option goes with the pre-existing module
angular.module("MyModule", [])

.controller("MyController", function($timeout, $interval, $scope, ABCCar, COLORS) {
	var self = this;	
	self.car = new ABCCar ("Ford", "Explorer"); 
	self.myColors = COLORS;
});

.controller('AuxiliaryController', function(COLORS, MathExpressionCalc) {
		var self = this;
		self.secondCtrlColors = angular.copy(COLORS); // this equates to COLORS array globally defined in the model
		self.popELement = function(){
			self.secondCtrlColors.pop();
		};

		// Whatever functions are inside .service can be accessed here
		self.resultSum = MathExpressionCalc.calculateSum(10, 20);
		self.resultMax = MathExpressionCalc.getMax(60, 43);

});