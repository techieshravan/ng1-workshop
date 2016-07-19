(function () {
  'use strict';

  angular
    .module('eventsApp')
    .directive('eventInfo', eventInfo);

  function eventInfo() {

    return {
      restrict: 'E',
      templateUrl: 'eventInfo/event-info.html'
    };
  }

})();
