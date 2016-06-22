(function () {
  'use strict';

  angular
    .module('demoApp')
    .directive('displayFullName', displayFullName);

  function displayFullName() {

    var directive = {
      restrict: 'AE',
      scope: {
        fullName: '=name'
      },
      template: '<p>Name: <strong>{{fullName.firstName}} {{fullName.lastName}}</strong></p>'
    };

    return directive;
  }

})();

/**
  
  scope: {
    fullName: '=' //same as fullName: '=fullName'   
  }

**/