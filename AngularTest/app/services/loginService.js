(function () {
    'use strict';

    var app = angular.module('app');
    var serviceId = 'loginservice';
    app.factory(serviceId, ['$http', '$q', loginService]);

    function loginService($http, $q) {

        function authenticate(model) {
            
            var deferred = $q.defer();
            $http.post('api/dynamic/login', model)
				.success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }

        var service = {
            authenticate :authenticate
        };
        return service;
    }
})();