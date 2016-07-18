(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('LaptopsController', LaptopsController);

    function LaptopsController() {
      var vm = this;
      vm.name = 'Laptops Details';
    };

})();
