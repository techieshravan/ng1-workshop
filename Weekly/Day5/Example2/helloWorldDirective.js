(function () {
    'use strict';

    angular
        .module('demoApp')
        .directive('helloWorldDirective', HelloWorldDirective);

    function HelloWorldDirective() {

        return {
          template: '<h1>Hello World Directive</h1>'
        };
    }

})();
