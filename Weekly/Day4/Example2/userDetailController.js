(function () {
    'use strict';

    angular
        .module('demoGithubApp')
        .controller('UserDetailController', UserDetailController);

    UserDetailController.$inject = ['dataservice', 'logger'];

    function UserDetailController() {

  		var vm = this;

    }

})();
