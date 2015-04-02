(function () {
    'use strict';
    var controllerId = 'login';
    var app = angular.module('app');
    app.controller(controllerId, ['$scope', '$modal','loginservice', loginController]);

    function loginController($scope, $modal,loginservice) {
        var vm = this;
        $scope.vm = vm;
        var loginDialog = {};

        vm.username = "";
        vm.password = "";
        vm.loginPopup = function () {
            //Show login dialogbox
            loginDialog = $modal.open({
                templateUrl: 'myModalContent',
                scope: $scope,
                backdrop:'static'
            });
        };

        vm.ok = function () {
            var promise = loginservice.authenticate({ username: vm.username, password: vm.password });
            promise.then(function () {
                vm.cancel();
                location.hash = '#/dashboard';
            });
        }

        vm.cancel = function () {
            loginDialog.dismiss('close');
        }

        activate();

        function activate() {

            $(".player").mb_YTPlayer();
            $(".video-controls").addClass('hidden');
        }

        return vm;
    }
    

})();