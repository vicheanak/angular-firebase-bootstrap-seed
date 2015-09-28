'use strict';

angular.module('myApp.lib.services', [])

.factory('firebaseData', function($q) {
    var FB_NAME = "https://YOUR-FIREBASE-REF.firebaseio.com/";
    return {
        ref: function () {
            return new Firebase(FB_NAME);
        },
    }
})

