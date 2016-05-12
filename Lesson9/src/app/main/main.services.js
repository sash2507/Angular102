(function() {
  'use strict';

  angular
    .module('template')

    .service('MainDataService', function(GoogleRequestService) {
        var self = this;

        self.getMainCtrlAddresses = function(address, onCompletion) {
            GoogleRequestService.getNearbyAddresses(address, function (isValid, response) {
                if (isValid) {
                    var finalResult = [];
                    for (var i = 0; i < response.results.length; i++) {
                        finalResult.push(response.results[i].formatted_address);
                    }
                    onCompletion(true, finalResult)
                } else {
                    // Error Handling
                }
            })
        };
    })


    .factory('MainResource', function($resource) {
      var resourceObject = $resource('/assets/json/sampleData.json', null, {
        getPeople: {
          method: 'GET',
          isArray: true // this is only when the json/any file is an array
        }
      });
      return resourceObject;
    });


    // The factory returns the resourceObject
    // RO needs to be fed with a url - the : is a placeholder to be filled in later
    // the 2nd arg to resource function is an object - it's optional only if you want someID to be a default
  //   .factory('MainResource', function($resource) {
  //     // var resourceObject = $resource('path/to/:someID/object', {
  //     var resourceObject = $resource('/api/users/auth', null, {
  //       // someID: 'someID' // this is OPTIONAL, if you see @ means it'll be filled in later
  //     }, 
  //     // This third argument is an object specifying an ACTION - e.g. signup
  //     {
  //       // Create a signup request "action"  - these are specifics about a request 
  //        signup: {
  //         method: 'PUT',
  //         headers: {
  //           content-type: '...' // this is a predefined things you can define (won't be )
  //         },
  //       isArray: true
  //       },
  //       login: {
  //         method: 'POST',
  //         headers: {

  //         }
  //     });
    
  //     return resourceObject;
  // });

})();