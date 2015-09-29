controllersModule.controller('miController', ['$scope', function ($scope) {
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

    $scope.ShowPanel = function() {
        return true;
    }

}]);

controllersModule.directive('mainInsured', function () {
    return {
        restrict: 'E',
        templateUrl: './shared-panels/main-insured/main-insured.html',
        controller: 'miController'
    }
});