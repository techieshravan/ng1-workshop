(function () {
  'use strict';

  angular
    .module('demoApp')
    .directive('linkDirective', linkDirective);

  function linkDirective() {

    return {
      restrict: 'AE',
      template: '<h1>Link Directive</h1>',
      link: linkFn
    };

    
    function linkFn(scope, element, attrs, controller, transcludeFn) {
      
      console.log(scope);
      console.log(element);
      console.log(attrs);
      console.log(attrs.name);
      console.log(controller);
      console.log(transcludeFn);

      element.append('<h2>Link Function</h2>');
    }
  }

})();