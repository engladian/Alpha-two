"use strict";
var controllersModule = angular.module('heronApp.Controllers', ['ngRoute']);

controllersModule.controller('homeController', ['$scope',function ($scope) {
    $scope.sponsor = {};

    $scope.sponsor.code = 'CIGNA'; //this will come from the home resolved factory call


    //Calculate which panels to display.


}]);

//Shared Routing
controllersModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                    templateUrl: './product-views/capture-view.html',
                    controller: 'homeController'
        //    resolve: {
        //        customerData: ['customerFactory', '$route', function (customerFactory, $route) {
        //            var xxxxzzzz = $route.current.params.dfdf;
        //            var xxxxyyyy = $route.current.params.dfdfd;
        //            return customerFactory.getCustomerInfo(dfdfdf, dsdsd);
        //        }],
        //    }
    })
    .otherwise('/home');
}]);