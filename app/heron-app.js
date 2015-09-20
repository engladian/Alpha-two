'use strict';
var appModule = angular.module('heronApp',['heronAppViews',function() {
}]);

appModule.controller('viewController', ['ngRoute', function() {
    



}]);

appModule.directive('firstInsured', function() {
    return {
    restrict: 'E',
        templateUrl: './components/shared-elements/firstinsured.html'
    }
});

appModule.directive('secondInsured', function () {
    return {
        restrict: 'E',
        templateUrl: './components/shared-elements/secondinsured.html'
    }
});