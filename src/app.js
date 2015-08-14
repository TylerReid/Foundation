'use strict';

// Declare app level module which depends on views, and components
angular.module('foundation', [
  'ngRoute',
  'foundation.test'
])

// Configure the route provider to redirect any non-existing route to root
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])


