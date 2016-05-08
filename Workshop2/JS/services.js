angular.module("MyModule")

.factory("reportCardFactory", function() {
    // Constructor function
    function reportCardConstructor () {
       this.assignmentInfo = [];
    };
    
    reportCardConstructor.prototype.addAssignmentInfo = function (name, grade) {
    	this.assignmentInfo.push(
    	{
    		name: name,
    		grade: grade
    	});
      console.log(this.assignmentInfo);
    };

    return reportCardConstructor;
})

.service('studentReportCard', function(){
	var self = this;

	// Average num grade calculation
	self.calculateAverage = function(numGrade) {
		var total = 0;
		for (var i = 0; i < numGrade.length; i++) {
			total = total + numGrade[i].grade;
			var average = (total/numGrade.length).toFixed(1);
		}
		return average;
  	};

  	// Letter grade calculation
  	self.getLetterGrade = function(grade) {
  		if(grade >= 90) {
  			return "A";
  		} else if (grade >= 80) {
  			return "B"; 
  		} else if (grade >= 70) {
  			return "C";
  		} else if (grade >= 65) {
  			return "D";
  		} else if (grade < 65) {
  			return "F";
  		}
  	};

  	// Pass Fail calculation
  	self.passFail = function (avg) {
  		if (avg >= 65) {
  			return "Pass";
  		} else {
  			return "Fail";
  		}
  	};

});