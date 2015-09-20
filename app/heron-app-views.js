"use strict";
var controllersModule = angular.module('heronAppViews.Controllers', ['ngRoute']);

//Shared Routing
controllersModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
         .when('/home', {
             templateUrl: 'home/start-page.html'
         })
         .when('/countries', {
             templateUrl: 'countries/countries.html',
             controller: 'CountriesController',
             resolve: {
                 countries: ['countriesFactory', function (countriesFactory) {
                     return countriesFactory.getCountries();
                 }]
             }
         })
        .when('/countries/:country/:capital', {
            templateUrl: 'countrydetails/countrydetails.html',
            controller: 'CountryDetailsController',
            resolve: {
                capitalPop: ['countriesFactory', '$route', function (countriesFactory, $route) {
                    var capital = $route.current.params.capital;
                    var countryCode = $route.current.params.country;
                    return countriesFactory.getCapitalPopulation(countryCode, capital);
                }],
                neighbours: ['countriesFactory', '$route', function (countriesFactory, $route) {
                    var countryCode = $route.current.params.country;
                    return countriesFactory.getNeighbours(countryCode);
                }]
            }
        })
        .otherwise('/home');
}]);