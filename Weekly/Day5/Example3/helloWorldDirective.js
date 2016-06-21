(function () {
    'use strict';

    angular
        .module('demoApp')
        .directive('helloWorldDirective', HelloWorldDirective);

    function HelloWorldDirective() {

        return {
          // restrict: 'ACEM', //A - Attribute, C - Class, E - Element, M - Comment
          template: '<p>Hello World Directive</p>',
          //replace: true //works with all but must be specified for comment form
        };
    }

})();
