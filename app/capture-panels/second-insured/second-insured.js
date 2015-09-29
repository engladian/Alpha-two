controllersModule.controller('siController', ['$scope', function ($scope) {
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

    $scope.ShowPanel = function () {
        return true;
    }
}]);

controllersModule.directive('secondInsured', function () {
    return {
        restrict: 'E',
        templateUrl: './shared-panels/second-insured/second-insured.html',
        controller: 'siController'
    }
});