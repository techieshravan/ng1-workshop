(function() {
    'use strict';

    angular
        .module('ngExample2')
        .controller('MainController', MainController);

    function MainController($scope) {

      var pageTitle = 'Working with Objects in Angular JS 1';

      var user  = {
      	name: 'Shravan Kumar Kasagoni',
      	age: 28,
      	userActive: true,
      	email: undefined,
      	phoneNumber: null
      }

      $scope.pageTitle = pageTitle;
      $scope.userDetails = user;
    };

})();
