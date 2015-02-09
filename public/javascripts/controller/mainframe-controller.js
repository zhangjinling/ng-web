/**
 * Created by Andy.Lv on 2014/11/13.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('mainframeController', ['$scope', '$http',
        function ($scope, $http) {
            //$scope.username = 'welcome';
            $http.get('/api/auth/authUser').then(function (res) {
                if (res.status === 200 && res.data) {
                    $scope.isAdmin = res.data.isAdmin;
                    $scope.username = res.data.username;
                }
            });
        }]);
})(angular);