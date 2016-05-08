(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  // Inject whatever dependencies you want here...
  // MainResource is basically what the factory returns (resourceObject)
  function MainController(MainResource) {
    var self = this;
    self.greeting = "Hello World";

    var resourceObject = MainResource;

    // Calling the function is what makes the request
    self.makeRequest = function() {
      // first argument is the URL params/query param
      resourceObject.getPeople({
        page: 0,
        numResults: 55
      })
      // For each action, make a promise - each promise has a .then function
      .$promise
      // Arguments of .then: Function if request successful, or unsuccessful
      .then(function onSuccess(response) {
        self.people = response;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        self.errorMessage = "Oops";
        console.log('ERROR: ', errorMessage) // eg. when you lose cell ph service
      });
     
      // second argument is the body params
      // only see body params if request type is PUT or POST 
      {
          bodyParam1: 'val1',
          bodyParam2: 'val2'
      });
    };

   
  };

})();
