(function () {
	'use strict';

	angular
		.module('demoApp')
		.controller('NameController', NameController);

	NameController.$inject = ['$scope']

	function NameController($scope) {

		$scope.fullName = {
			firstName: 'Shravan',
			lastName: 'Kasagoni'
		};

	}

})();