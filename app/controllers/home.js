'use strict';

angular.module('myApp.controllers.home', [])

// Home controller
.controller('HomeCtrl', function($scope, $rootScope, firebaseData) {
     $scope.isCollapsed = true;
});
