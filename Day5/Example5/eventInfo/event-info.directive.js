(function () {
  'use strict';

  angular
    .module('eventsApp')
    .directive('eventInfo', eventInfo);

  function eventInfo() {

    return {
      templateUrl: 'eventInfo/event-info.html'
    };
  }

})();
