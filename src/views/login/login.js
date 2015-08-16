/*  

Login Module for Foundation
Written by Tyler Reid & Sam Reaves
August 15th, 2015

*/

'use strict';

// Declare app level Login module
angular.module('foundation.login', [])

	// Configure /login route to use the login controller and partial
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'views/login/login.html',
			controller: 'LoginCtrl'
		});
	}])

	// Set up Login controller
	.controller('LoginCtrl', ["$window", "$scope", function($window, $scope) {
		
		// Initialize user profile variables we'll need later
		var user_profile = {};
		$scope.user_name = '';
		$scope.email = '';
		$scope.authenticated = false;

		// Sign in method - triggered on click of Google Sign In Button
		$scope.onSignIn = function(googleUser) {
			
			// Populate local user profile info from non-Angular Google API
			// Set authenticated boolean to true
			user_profile = googleUser.getBasicProfile();
			$scope.user_name = user_profile.getName();
			$scope.email = user_profile.getEmail();
			$scope.authenticated = true;
			
			// Call digest to let Angular know the scope has changed
			// needed because the third party google library is calling this function
			$scope.$digest();
		};

		// Bind onSignIn method to browser's window object so that Google code may trigger it 
		$window.onSignIn = $scope.onSignIn;
		
		// Sign out method - triggered when user clicks sign out button
		$scope.signOut = function() {

			// TYLER - What exactly is a Google API auth instance?
			var auth2 = gapi.auth2.getAuthInstance();
			
			// Sign out using Google Authentication API
			auth2.signOut().then(function() {
				
				// Clear user profile variables. Clear authenticated boolean
				$scope.user_name = '';
				$scope.email = '';
				$scope.authenticated = false;
				user_profile = {};

				
				// Call digest to let Angular know the scope has changed
				// needed because the third party google library is calling this function
				$scope.$digest();
			});
		}
	}]);