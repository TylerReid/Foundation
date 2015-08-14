'use strict';

// Declare app level module which depends on views, and components
angular.module('foundation.test', [])

// Configure root to use the test partial and TestCtrl controller
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/test/test.html',
    controller: 'TestCtrl'
  });
}])

// Set up TestCtrl controller
.controller("TestCtrl", function($scope) {

  // Set up initial variables 
  $scope.password = "";
  $scope.input = "";
  $scope.encryptedResult = "";
  $scope.decryptedResult = "";

  // Encrypt data passed
  $scope.encrypt = function(dataToEncrypt){
  	
  	// Hash password to get the AES key
    var hash = hashPassword($scope.password);

    // Encrypt data with the default method
    $scope.encryptedResult = sjcl.encrypt(hash, dataToEncrypt);
  };
  
  // Decrypt data passed
  $scope.decrypt = function(dataToDecrypt){

  	// Hash password to het the AES key
    var hash = hashPassword($scope.password);
    
    // Decrypt the data using the key
    $scope.decryptedResult = sjcl.decrypt(hash, dataToDecrypt);
  }

  // Get a 256 bit key by hashing the password 10000 times.
  var hashPassword = function(password){

  	// Cache result
  	var result = sjcl.misc.pbkdf2(password, "LOLOL", 10000, 256); 
    
    return result;
  }
});