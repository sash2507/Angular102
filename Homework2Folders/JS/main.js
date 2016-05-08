var myMod = angular.module("MyModule", []);

///////// HW Part 1 ///////////
myMod.controller("MyController", function() {
	var self = this;
	// Makes checkbox unchecked upon page load (ng-show takes true value)
	self.isBoxChecked = false;
	// Array of objects with a nested array (filesInFolder) of objects 
	self.fileNames = [
		{
			folderName: "Folder One",
			
			filesInFolder: 
			[
				{
					text: "File 1.1"
				}
			
			]
		},
		{
			folderName: "Folder Two",
			filesInFolder: 
			[
				{
					text: "File 2.1"
				}
			]
		},
		{
			folderName: "Folder Three",
			filesInFolder: 
			[
				{
					text: "File 3.1"
				}
			]
		}
	];
	// Makes checkbox unchecked
	self.isFilesBoxChecked = true;
	// 'addFilesToFolders' runs on ng-click of button
	self.addFilesToFolders = function() {
		// addFiles becomes ng-model of radio input
		self.addFiles.filesInFolder.push(
			{	
				folderName: self.addFiles,
				// inputFiles becomes ng-model of text input
				text: self.inputFiles
			}
		);
	}
});

///////// HW Part 2 //////////
// 	myMod.controller("MyController", function() {
// 	var self = this;
// 	self.toDos = [{name: "Eat cake", description: "After gym", priority: "medium-priority"}];
// 	self.addToDo = function () {
//     self.toDos.push(
//     	{
//     		name: self.toDoName,
//     		description: self.toDoDescription,
//     		priority: self.color
//    		});
 
//   	};
// });
