(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('AccessoriesController', AccessoriesController);

    function AccessoriesController() {
      var vm = this;

      vm.accessories = {
        SAdapter: {
           name: 'Thunderbolt to Gigabit Ethernet Adapter',
           price: 29,
           show: true
        },
        LAdapter: {
           name: 'Mini DisplayPort to VGA Adapter',
           price: 29,
           show: false
        },
        MAdapter: {
           name: 'Mini DisplayPort to Dual-Link DVI Adapter',
           price: 99,
           show: true
        },
        Accessory3: {
           name: 'Magic Keyboard',
           price: 99,
           show: true
        },
        Accessory1: {
           name: 'Magic Mouse 2',
           price: 79,
           show: false
        },
        Accessory4: {
           name: 'Magic Trackpad 2',
           price: 129,
           show: true
        }
      };
    }

})();
