var myMod = angular.module("MyModule", []);

myMod.controller("MyController", function(reportCardFactory, studentReportCard) {
	var self = this;
// Create a new instance of factory
  self.reportCard = new reportCardFactory();
  self.calcAvg = 0;
// Reference prototype function that pushes onto array in constructor
  self.pushAssignment = function() {
    self.reportCard.addAssignmentInfo(self.assignmentName, self.assignmentGrade);
  };
// Reference services and its functions
  self.displayReportCard = function() {
    self.calcAvg = studentReportCard.calculateAverage(self.reportCard.assignmentInfo);
    self.letterGrade = studentReportCard.getLetterGrade(self.calcAvg);
    self.passOrFail = studentReportCard.passFail(self.calcAvg);
  };

});