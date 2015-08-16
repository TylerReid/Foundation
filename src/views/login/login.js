'use strict';

// Declare app level module
angular.module('foundation.login', [])

// Configure /login to use the login controller and partial
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'views/login/login.html',
		controller: 'LoginCtrl'
	});
}])

// Set up controller
.controller('LoginCtrl', function($scope) {
	
	$scope.userName = '';
	$scope.email = '';
	var profile = {};
	
	$scope.onSignIn = function(googleUser) {
		profile = googleUser.getBasicProfile();
		$scope.userName = profile.getName();
		$scope.email = profile.getEmail();
		
		// Call digest to let Angular know the scope has changed
		// needed because the third party google library is calling this function
		$scope.$digest();
	};
	
	// Is this correct?
	window.onSignIn = $scope.onSignIn;
	
	$scope.signOut = function() {
		var auth2 = gapi.auth2.getAuthInstance();
		
		auth2.signOut().then(function() {
			$scope.userName = '';
			$scope.email = '';
			profile = {};
			
			// Call digest to let Angular know the scope has changed
			// needed because the third party google library is calling this function
			$scope.$digest();
		});
	}
});