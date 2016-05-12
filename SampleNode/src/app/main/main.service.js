'use strict';

angular
.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	var resourceObject = $resource('/api/addtodo', null, {
		addTodo: {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			isArray: false
		}
	});
	return resourceObject;
})

.factory('TodoListResource', function($resource) {
	var resourceObject = $resource('/api/getTodos', null, {
		getTodos: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			isArray: true
		}
	});
	return resourceObject;
})

.factory('TodoDetailsResource', function($resource) {
	var resourceObject = $resource('/api/getTodoDetails/:todoId/', {
		todoId: '@someID'
		}, {
		getTodoDetails: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			isArray: false
		}
	});
	return resourceObject;
})

.factory('TodoUpdateResource', function($resource) {
	var resourceObject = $resource('/api/updateTodo', null, {
		updateTodo: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			isArray: false
		}
	});
	return resourceObject;
})