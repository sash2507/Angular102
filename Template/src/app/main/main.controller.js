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






   
  };

})();
