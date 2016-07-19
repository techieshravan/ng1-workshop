(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('PhonesController', PhonesController);

    function PhonesController() {
      var vm = this;
      vm.name = 'Phones Details';
    };

})();
