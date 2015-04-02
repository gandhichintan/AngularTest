(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
        ['$rootScope', shell]);

    function shell($rootScope) {
        var vm = this;
      
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = false;
        vm.spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'
        };

        activate();

        function activate() {
         
        }

      
        
       
    };
})();