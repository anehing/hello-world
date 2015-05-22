/**
 * Created by ane on 5/18/15.
 */

var app = angular.module('myApp',[]);

app.controller('MyController',function($scope,$parse){
   $scope.$watch('expr',function(newVal,oldVal,scope){
       if(newVal !== oldVal){
           var parseFun = $parse(newVal);
           $scope.parsedValue = parseFun(scope);
       }
   });
});