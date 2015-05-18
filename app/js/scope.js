/**
 * Created by ane on 5/18/15.
 */
var app = angular.module('app', []);
app.controller('FirstController', function($rootScope) {
    $rootScope.name = "hello";
});