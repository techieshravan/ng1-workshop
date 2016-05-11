(function() {
    'use strict';

    angular
        .module('productsApp')
        .controller('MainController', ProductsController);

    function ProductsController() {

      var vm = this;

      vm.pageTitle = "Apple Laptops";

      var macBooks  = {
      	product1: 'MacBook',
        product2: 'MacBook Air',
        product3: 'MacBook Pro'
      }

      vm.laptops = macBooks;
    };

})();
