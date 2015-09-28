'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'myApp.lib.services',
    'myApp.directives.myDirective',
    'myApp.controllers.home',
])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home', {
        title: 'Home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

}])

.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
