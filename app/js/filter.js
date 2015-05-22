/**
 * Created by ane on 5/19/15.
 */
angular.module('myApp',[])
    .filter('capitalize',function(){
        return function(input){
            if(input){
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });