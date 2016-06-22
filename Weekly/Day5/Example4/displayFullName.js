(function () {
  'use strict';

  angular
    .module('demoApp')
    .directive('displayFullName', displayFullName);

  function displayFullName() {

    return {
      template: '<p>Name: <strong>{{fullName.firstName}} {{fullName.lastName}}</strong></p>'
    };
  }

})();