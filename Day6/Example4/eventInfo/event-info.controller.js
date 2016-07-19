(function () {
	'use strict';

	angular
		.module('eventsApp')
		.controller('EventInfoController', EventInfoController);

	EventInfoController.$inject = ['$scope'];

	function EventInfoController($scope) {

		$scope.event = {
			name: 'Global Azure Bootcamp 2016',
			date: '2016-04-16',
			venue: {
				location: 'Microsoft India Development Center, Building 3',
				area: 'Gachibowli', 
				city: 'Hyderabad',
				state: 'Telangana'
			},
			speakers: [
				'Abhijit Jana',
				'Arun Kumar',
				'Charul Pant',
				'Inderjeet Singh',
				'Janakiram MSV',
				'Krishna Chaitanya',
				'Magesh Jaganathan',
				'Pranav Ainavolu',
				'Ritesh Modi',
				'Sakshi Rungta',
				'Saryu Wahi',
				'Shravan Kasagoni',
				'Subhendu De'
			],
			sessions: [
				'Keynote - Create The Internet of Your Things',
				'Application Insights Deep Dive',
				'Automation of Secured Code Deployment on Azure',
				'Overview of Azure Resource Template',
				'Using Azure Mobile Services for Cross Platform Applications',
				'Infrastructure as a Service - Azure Virtual Machines',
				'Modern Authentication with Azure Active Directory',
				'Building Windows IoT Core UWP apps using Raspberry Pi 2',
				'Building a Conversational Bot using Microsoft BotFramework and Azure',
				'Overview of Azure IoT Hub with Raspberry Pi 2',
				'Building hyper-scale micro services using Azure Service Fabric',
				'Building Mixed Reality Experiences Using Microsoft HoloLens'
			]
		};

		$scope.parentControllerVariable = 'Parent - Controller Variable';

		console.log($scope);
	}

})();
