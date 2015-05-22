/**
 * Created by ane on 5/18/15.
 */
var app = angular.module('myApp', []);



app.controller('MyController', function($scope, $interpolate) {
    $scope.$watch('emailBody',function(body){
        if(body){
            var template = $interpolate(body);
            $scope.previewText = template({to: $scope.to});
        }
    });
});
