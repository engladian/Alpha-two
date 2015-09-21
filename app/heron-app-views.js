"use strict";
var controllersModule = angular.module('heronApp.Controllers', ['ngRoute']);

controllersModule.controller('startController', ['$scope', function ($scope) {


    $scope.CalculateAge = function (dob) {
        if (dob == null) {
            return null;
        }

        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }

}]);


controllersModule.directive('firstInsured', function () {
    return {
        restrict: 'E',
        templateUrl: './components/shared-panels/main-insured.html',
        controller: 'startController'
    }
});

controllersModule.directive('secondInsured', function () {
    return {
        restrict: 'E',
        templateUrl: './components/shared-panels/second-insured.html',
        controller: 'startController'
    }
});

//Shared Routing
controllersModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
         .when('/start', {
             templateUrl: './product-views/start-view.html',
             controller: 'startController'
         })
        // .when('/countries', {
        //     templateUrl: 'countries/countries.html',
        //     controller: 'CountriesController',
        //     resolve: {
        //         countries: ['countriesFactory', function (countriesFactory) {
        //             return countriesFactory.getCountries();
        //         }]
        //     }
        // })
        //.when('/countries/:country/:capital', {
        //    templateUrl: 'countrydetails/countrydetails.html',
        //    controller: 'CountryDetailsController',
        //    resolve: {
        //        capitalPop: ['countriesFactory', '$route', function (countriesFactory, $route) {
        //            var capital = $route.current.params.capital;
        //            var countryCode = $route.current.params.country;
        //            return countriesFactory.getCapitalPopulation(countryCode, capital);
        //        }],
        //        neighbours: ['countriesFactory', '$route', function (countriesFactory, $route) {
        //            var countryCode = $route.current.params.country;
        //            return countriesFactory.getNeighbours(countryCode);
        //        }]
        //    }
        //})
        .otherwise('/start');
}]);