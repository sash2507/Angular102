'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;
  self.isEditing = false;
  var getTodoList = TodoListResource; //getAllTodos
  var addResource = TodoAddResource; // addTodo
  var editResource = TodoDetailsResource; // editTodo
  var updateTodoList = TodoUpdateResource; // updateTodo

  function getAllTodos() {
    getTodoList.getTodos()
    .$promise
    .then(function onSuccess(response) {
      self.todos = response;
      console.log(self.todos);
      console.log('SUCCESS: ', response)
       }, 
      function onError(errorMessage) {
        console.log('ERROR: ', errorMessage) 
      });
  };
 
  // Specify body params (PUT)
  self.addTodo = function(todo) {
    addResource.addTodo(null,{
      name: todo.name,
      description: todo.description
    })
    .$promise
    .then(function onSuccess(response) {
      // self.userTodo = response;
      self.todos.push(self.userTodo);
      console.log('SUCCESS: ', response)
      
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage) 
      });
  };

  self.editTodo = function(todo) {
    editResource.getTodoDetails({
      todoId: todo._id
    })
      .$promise
      .then(function onSuccess(response) {
        // Declare the "todo" object
        self.someTodo = todo;
        self.userTodo = response;
        self.isEditing = true;
        console.log('SUCCESS:', response)
      }, function onError(errorMessage) {
        console.log('ERROR:', errorMessage)
      });
};
  
  // Specify body params (POST)
  self.updateTodo = function(todo) {
    updateTodoList.updateTodo(null,
    {
      _id: todo._id,
      name: todo.name,
      description: todo.description
    })
    .$promise
    .then(function onSuccess(response) {
      // Makes "name" key of todo object appear in list
        self.someTodo.name = todo.name;
        console.log(self.todos);
        self.userTodo = {};
        console.log('SUCCESS: ', response)

      }, 
      function onError(errorMessage) {
        console.log('ERROR: ', errorMessage) 
      });
  };

  self.cancelUpdate = function() {
    self.userTodo.name = {};
    self.isEditing = false;
  };

    getAllTodos();
});
