(function () {
    'use strict';

    angular
        .module('demoApp')
        .controller('LocationDetailController', LocationDetailController);

    LocationDetailController.$inject = ['$scope', '$location'];

    function LocationDetailController($scope, $location) {

        var vm = this;

        var getLocationInfo = function () {

            var locationInfo = {
                'absolute-Url': $location.absUrl(),
                'hash': $location.hash(),
                'host': $location.host(),
                'path': $location.path(),
                'port': $location.port(),
                'protocol': $location.protocol(),
                'search': $location.search(),
                'url': $location.url()
            };

            return locationInfo;
        };

        var route = function () {
            $location.path('/relative-path-no-route');
        };

        var hash = function () {
            $location.hash('someHashTag');
        };

        var search = function () {
            $location.search('query', 'value');
        };

        var url = function () {
            $location.url('/');
        };

        $scope.$on("$locationChangeStart", function () {
            vm.locationInfo = getLocationInfo();
        });

        vm.locationInfo = getLocationInfo();
        vm.route = route;
        vm.hash = hash;
        vm.search = search;
        vm.url = url;
    }

})();
