(function () {
    'use strict';

    angular
        .module('demoCityApp')
        .controller('CityDetailController', CityDetailController);

    function CityDetailController() {

  		var vm = this;
      vm.selectedVenue = null;

  		var venues = [
        {
    			id: 12345671,
    			name: "The Event Space 1",
    			city: "Bristol",
    			country: "United Kingdom",
    			latitude: 51.444674,
    			longitude: -2.605731,
    			country_code: "GB"
    		},
        {
  				id: 12345672,
  				name: "The Event Space 2",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345673,
  				name: "The Event Space 3",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345674,
  				name: "The Event Space 4",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345675,
  				name: "The Event Space 5",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345676,
  				name: "The Event Space 6",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345677,
  				name: "The Event Space 7",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345678,
  				name: "The Event Space 8",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			},
        {
  				id: 12345679,
  				name: "The Event Space 9",
  				city: "Bristol",
  				country: "United Kingdom",
  				latitude: 51.444674,
  				longitude: -2.605731,
  				country_code: "GB"
  			}
      ];

      function showVenue(venueId) {
        vm.selectedVenue = venues.filter(function(venue) { return venue.id === venueId })[0];
        console.log(vm. selectedVenue);
      }

      vm.venues = venues;
      vm.showVenue = showVenue;
    }

})();
