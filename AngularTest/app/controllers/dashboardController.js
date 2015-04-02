(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId,[ '$upload', dashboard]);

    function dashboard($upload) {

        var vm = this;
        vm.files = {};
        vm.filePath = [];

        //Upload Files
        vm.upload = function (files) {
            
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    $upload.upload({
                        url: 'api/dynamic/fileupload',
                        file: file
                    }).progress(function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                    }).success(function (data, status, headers, config) {
                       
                        vm.filePath.push(data);
                        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    });
                }
            }
        };
       
        vm.title = 'Dashboard';

        activate();

        function activate() {
           
            $('#home3').addClass('hidden');
        }

        return vm;
    }
})();