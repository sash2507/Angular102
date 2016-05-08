	///////// Part 2 //////////
	var myMod = angular.module("MyModule", []);
	myMod.controller("MyController", function() {
	var self = this;
	self.toDos = [{name: "Eat cake", description: "After gym", priority: "medium-priority"}];
	self.addToDo = function () {
    self.toDos.push(
    	{
    		name: self.toDoName,
    		description: self.toDoDescription,
    		priority: self.color
   		});
 
  	};

});

