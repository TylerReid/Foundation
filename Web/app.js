var app = angular.module('foundation', []);

app.controller('MainCtrl', function($scope) {
  $scope.products = mockProducts;
});

//sign in magic
var CLIENT_ID = "379567730799-lhbttelljdespdn0rp3uh1vnbavn1du1.apps.googleusercontent.com";
var SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];

var mockProducts = [{"name":"Gmail","id":"123456"},
  {"name":"Amazon","id":"654321"},
  {"name":"Facebook","id":"666"}];


