var app = angular.module('foundation', []);

app.controller('MainCtrl', function($scope) {
  $scope.password = "";
  $scope.input = "";
  $scope.encryptedResult = "";
  $scope.decryptedResult = "";
  
  $scope.encrypt = function(dataToEncrypt){
    var hash = hashPassword($scope.password);
    $scope.encryptedResult = sjcl.encrypt(hash, dataToEncrypt);
  };
  
  $scope.decrypt = function(dataToDecrypt){
    var hash = hashPassword($scope.password);
    $scope.decryptedResult = sjcl.decrypt(hash, dataToDecrypt);
  }
  
  var hashPassword = function(p){
    return sjcl.misc.pbkdf2($scope.password, "LOLOL", 10000, 256);//todo real salt
  }
});


