(function (global) {

	'use strict';

	angular.module('bct.utils.extend-js', [])

		.provider('Class', function () {

			// assumes underscore has already been loaded on the page
			var extendJs = global.Class;

			return {
				_: extendJs,
				$get: function () {
					return extendJs;
				}
			};
		});

})(window);
