(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  // Inject whatever dependencies you want here...
  function MainController() {
    var self = this;
    self.greeting = "hello world";

    self.boxes = [];
    self.addBox = function () {
      self.boxes.push({})
    };
    self.removeBox = function () {
      self.boxes.pop();
    }

    // Can also use ng-pattern like this
    // self.phoneExpression = /^\(\d\d\d) \d\d\d-\d\d\d\d/$;
    self.submitForm = function() {
      if(self.myFirstForm.$valid) {
        // submit the form - mostly an http request
      } else {
        // alert "form cannot be submitted"
      }
    };

    // Use ng-options with an array

    // self.states = ['Cali', 'Florida', 'New York'];

    // Use ng-options with an array of objects
    // self.states = [{
    //   name: 'California',
    //   abbr: 'CA'
    // }, {
    //   name: 'Florida',
    //   abbr: 'FL'
    // }, {
    //   name: 'New York',
    //   abbr: 'NY'
    // }];
   
   // Use ng-options with an object
    self.states = {
     NY: 'New York',
     CA: 'California',
     FL: 'Florida'
    };

  };
})();
