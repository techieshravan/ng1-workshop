(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('ProductsController', ProductsController);

    function ProductsController() {

      var vm = this;

      vm.title = "Apple Laptops";

      var macBooks  = {
      	product1: 'MacBook',
        product2: 'MacBook Air',
        product3: 'MacBook Pro'
      }

      vm.laptops = macBooks;
    };

})();
