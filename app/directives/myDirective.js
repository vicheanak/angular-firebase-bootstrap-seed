'use strict';

angular.module('myApp.directives.myDirective', [])

.directive('myDiv', function(){
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '='
        },
        template: '<div>{{ngModel}}</div>'
    }
})

