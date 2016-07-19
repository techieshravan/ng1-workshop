(function () {
  'use strict';

  angular
    .module('eventsApp')
    .directive('eventInfo', eventInfo);

  function eventInfo() {

    return {
      restrict: 'E',
      templateUrl: 'eventInfo/event-info.html',
      scope: {
        myEventDetail: '=' //myEventDetail: '=myEventDetail' //2 way data binding
      },
      controller: function ($scope) {

        $scope.removeSession = function (idx) {
          $scope.myEventDetail.sessions.splice(idx, 1);
          console.log($scope);
        };

        $scope.removeSpeaker = function (idx) {
          $scope.myEventDetail.speakers.splice(idx, 1);
          console.log($scope);
        };

        console.log($scope);
      }
    };
  }

})();
