angular.module('autoDirectives')
    .directive('InitEvent', ['$rootScope',
        function($rootScope) {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, elm, attr) {
                    // $rootScope.$on('InitCtrlFinish', function() {
                    scope.$on('InitCtrlFinish', function() {
                        console.log('EVENTTTTT: ');
                        $(document).foundation();
                    });
                }
            };
        }
    ]);