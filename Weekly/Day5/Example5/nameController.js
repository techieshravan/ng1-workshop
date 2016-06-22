(function () {
	'use strict';

	angular
		.module('demoApp')
		.controller('NameController', NameController);

	NameController.$inject = ['$scope']

	function NameController($scope) {

		$scope.fullName1 = {
			firstName: 'Shravan',
			lastName: 'Kasagoni'
		};

		$scope.fullName2 = {
			firstName: 'Pranav',
			lastName: 'A'
		};

		$scope.names = [
			{
				firstName: 'FirstName1',
				lastName: 'LastName1'
			},
			{
				firstName: 'FirstName2',
				lastName: 'LastName2'
			},
			{
				firstName: 'FirstName3',
				lastName: 'LastName3'
			},
			{
				firstName: 'FirstName4',
				lastName: 'LastName4'
			}
		];

	}

})();