(function(window) {

	"use strict";

	window.app = {};
	window.app.isAngular = true;
	window.ENV = {};

	angular.module('bct', [

		//app dependencies
		'bct.models',
		'bct.modules',
		'bct.pages',
		'bct.utils',

		//3rd Party dependencies;
		'ui.router',
		'ui.bootstrap'
	])

		.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

			$urlRouterProvider.otherwise("/home");

			$stateProvider
				.state('root', {
					url: '',
					abstract: true,
					// views: {
					// 	'header': {
					// 		templateUrl: 'assets/views/root/header.html',
					// 		controller: 'RootController'
					// 	},
					// 	'footer': {
					// 		templateUrl: 'assets/views/root/footer.html',
					// 		controller: 'RootController'
					// 	}
					// }
				})
				.state('root.home', {
					url: '/home',
					views: {
						'container@': {
							templateUrl: 'assets/views/home/main.html',
							controller: 'HomeController',
							controllerAs: 'homeCtrl'
						}
					}
				});


			$httpProvider.interceptors.push(function($q) {
				return {

					'response': function(response) {

						if (angular.isDefined(response.data.status) && response.data.status === "failure") {
							alert(response.data.message);
							return $q.reject(response);
						}

						return $q.when(response);
					}
				};
			});

		});


})(window);