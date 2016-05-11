var myApp = angular.module('ngExample1', []);

myApp.controller('MyController1', function ($scope) {
  $scope.userName = 'Shravan Kumar Kasagoni';
  $scope.age = 28;
});

myApp.controller('MyController2', function ($scope) {
  $scope.userActive = true;
  $scope.email = undefined;
  $scope.phoneNumber = null;
});
