angular.module("MyModule", [])
	// Built-in Angular services (timeout, interval, log)
	.controller("MyController", function($timeout, $interval, $log, $scope) {
	var self = this;
	self.name = "cupcake";

	// $timeout replaces setTimeout from javascript
	$timeout(function() {
		console.log("Function runs");
		self.name = "Saloni!";
	}, 5000)

	// $interval is like setInterval, keeps doing something until told to stop
	// 3rd argument is the # of times you want it to do something
	self.count = 5;
	$interval(function() {
		self.count--;
	}, 1000, 5);
	
	self.car = {
		make: "Ford",
		model: "Explorer",
		year: ""
	}

	// This is better in terms of performance than $scope
	self.onYearChanged = function() {
	// This only runs it if true
		if (self.car.year) {
		self.car.age = 2016 - parseInt(self.car.year);
		}
	}
	// The problem with the above is it's stuck in one controller, move to model!
	// Remedy this by moving into model, creating another controller
});
	// New controller
	// "$__" into .controller is known as depedency injection
	.controller("MyController", function($timeout, $interval, $scope, ABCCar, COLORS) {
	var self = this;
	// Controller on scope, car on scope, car has make, model, setYear and needsRepair
	// Motivation: age updates as we type
	self.car = new ABCCar ("Ford", "Explorer"); // This HAS to be name of factory

	// FACTORY function - defined like controller (.factory)
	.factory ("ABCCar", function () {
		// Factory houses the constructor function
	    function Car(make, model) {
	        this.make = make;
	        this.model = model;
	    }
	    // This is the prototype functions defined on the constructor fn
		    Car.prototype.setYear = function(year) {
		         this.year = year;
		         this.age = 2016 - parseInt(year);
		    }

		    Car.prototype.needsRepair = function() {
		        if (this.age > 10) { 
		            return true;
		        } else {
		            return false;
		        }
		    }
	    // Return the constructor function
	    return Car;
	})
})
	// Value function, takes a name and anything, like an array
	.value("COLORS", [
		{
			name: "red"
		},
		{
			name: "blue"
		},
		{
			name: "green"
		},
		{
			name: "orange"
		}
	])
	// VALUE function - can be a string, an object, an array of obj
	.controller('AuxiliaryController', function(COLORS) {
		var self = this;
		self.secondCtrlColors = angular.copy(COLORS); // this equates to COLORS array globally defined in the model
		self.popELement = function(){
			self.secondCtrlColors.pop();
		}
	})


	// Now that there are fns on the constructor fn, can call it
	// var myCar = new Car("Ford");
	//  myCar.setYear(1999);
	//  myCar.needsRepair();

	// $log used in place of console.log
	// $log.log("normal log");
	// $log.info("info log")
	// $log.error("error log")
	// $log.debug("debug log")

	// DO NOT USE THIS METHOD!
	// // $scope.watch - there are 3 flavors, but don't use it!
	// // Simplest: first arg is thing we want to watch, second arg is a function
	// // $scope.$watch('ctrl.car.year'), function(newVal, oldVal) {
	// // 	// console.log("newvalue:", newVal);
	// // 	// console.log("oldvalue", oldVal);
	// // 	if(newVal) {
	// // 	self.car.age = 2016 - parseInt(newVal);
	// // 	}
	// // }
	// // Arrays: when stuff goes in/comes out of array: use watchCollection
	// // Objects: "deep watch/watch equality", when you want Angular to watch entire object

