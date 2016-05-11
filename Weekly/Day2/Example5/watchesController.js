(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('WatchesController', WatchesController);

    function WatchesController() {
      var vm = this;
      vm.name = 'Watches Details';
    };

})();
