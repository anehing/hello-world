/**
 * Created by ane on 5/18/15.
 */
var app = angular.module('app', []);

app.controller('ParentController', function($scope) { $scope.person = {greeted: false};
});
app.controller('ChildController', function($scope) {
    $scope.sayHello = function() {
        $scope.person.name = 'Ari Lerner';
        $scope.person.sex = "female";
    };
});