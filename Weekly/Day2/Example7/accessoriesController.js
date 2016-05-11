(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('AccessoriesController', AccessoriesController);

    function AccessoriesController() {
      var vm = this;

      vm.accessories = [
        {
           name: 'Thunderbolt to Gigabit Ethernet Adapter',
           price: 29,
           show: true
        },
        {
           name: 'Mini DisplayPort to VGA Adapter',
           price: 29,
           show: false
        },
        {
           name: 'Mini DisplayPort to Dual-Link DVI Adapter',
           price: 99,
           show: false
        },
        {
           name: 'Magic Keyboard',
           price: 99,
           show: true
        },
        {
           name: 'Magic Mouse 2',
           price: 79,
           show: false
        },
        {
           name: 'Magic Trackpad 2',
           price: 129,
           show: true
        }
      ];
    };

})();
