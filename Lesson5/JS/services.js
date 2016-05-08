// In a new file - do we want a preexisting box or a new box?
// To use a pre-existing box, do this:
angular.module("MyModule"); // note order changes in html, this file comes second then


// To create a new box, do this:
// angular.module("MyServices", []);
// SERVICES
.service("MathExpressionCalc", function() {
	var self = this; // Always begin wtih this

	// Generic utility functions go here:
	self.calculateSum = function(a, b) {
		return a + b;
	};

	self.getMax = function(a, b) {
		if(a > b) {
			return a;
		} else {
			return b;
		}
	}
});

// VALUES
.value("API_KEY", "ADAFJDJFUJDHFR")

.value ("MyState", {

})

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

// FACTORY function
.factory ("ABCCar", function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
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
    return Car;
});