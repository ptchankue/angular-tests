var myApp = angular.module('myApp',[]);
	myApp.controller('HelloWorldController', ['$scope', function($scope) {
		$scope.greeting = 'Hello World!';
	}]);

// Defining a different template tag
myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});