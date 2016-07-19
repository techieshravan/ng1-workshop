(function() {
    'use strict';

    angular
        .module('ngExample3')
        .controller('MainController1', MainController1);

    function MainController1($scope) {
      $scope.title = 'MainController1';
    }

})();

(function() {
    'use strict';

    angular
        .module('ngExample3')
        .controller('MainController2', MainController2);

    function MainController2($scope) {
      $scope.title = 'MainController2';
    };

})();
