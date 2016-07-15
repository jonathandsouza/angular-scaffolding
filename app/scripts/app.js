(function (window) {

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
		'angularSpinner',
		'ui.bootstrap'
	])

		.config(function ($stateProvider, $urlRouterProvider, usSpinnerConfigProvider, $httpProvider) {

			$urlRouterProvider.otherwise("/guest-booking-history");


			$stateProvider
				.state('root', {
					url: '',
					abstract: true,
					views: {
						'header': {
							templateUrl: 'assets/views/root/header.html',
							controller: 'RootController'
						},
						'footer': {
							templateUrl: 'assets/views/root/footer.html',
							controller: 'RootController'
						}
					}
				})
				.state('root.guestBookingHistory', {
					url: '/guest-booking-history?phone',

					views: {
						'container@': {
							templateUrl: 'assets/views/guest-booking-history/view.html',
							controller: 'GuestBookingHistoryController',
							controllerAs: 'guestBkHistCtrl'
						}
					}
				});


			//default Spinner Settings;
			usSpinnerConfigProvider.setDefaults({color: '#ec008c', radius: 10});


			$httpProvider.interceptors.push(function ($q) {
				return {

					'response': function (response) {

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