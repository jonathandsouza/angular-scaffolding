(function() {
	"use strict";
	angular.module('bct.pages', [])
		.controller('RootController', function() {

		})
		.controller('HomeController', function() {
			console.log('controller loaded');
			this.name = 'Jonathan Dsouza'
		})

})();