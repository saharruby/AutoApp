angular.module('autoControllers')
    .controller('IndexCtrl', ['$scope', '$timeout', '$templateCache', 'IndexServices', 'NavServices',
        function($scope, $timeout, $templateCache, IndexServices, NavServices) {
            $scope.navs = NavServices.navs;
            $scope.showDots = true;
            window.dbg = $templateCache;

            IndexServices.getAllLatestArticles().success(function(data) {
                $scope.latest = data;
            });
        }
    ]);
