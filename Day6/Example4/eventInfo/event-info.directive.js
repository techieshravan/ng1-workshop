(function () {
  'use strict';

  angular
    .module('eventsApp')
    .directive('eventInfo', eventInfo);

  function eventInfo() {

    return {
      restrict: 'E',
      templateUrl: 'eventInfo/event-info.html',
      scope: { },
      controller: function ($scope) {

        $scope.removeSession = function (idx) {
          $scope.event.sessions.splice(idx, 1);
        };

        $scope.removeSpeaker = function (idx) {
          $scope.event.speakers.splice(idx, 1);
        };

        $scope.childDirectiveVariable = 'Child - Directive Variable';

        console.log($scope);
      }
    };
  }

})();
