angular.module('autoControllers')
    .controller('IndexCtrl', ['$scope', '$timeout', 'IndexServices', 'NavServices',
        function($scope, $timeout, IndexServices, NavServices) {
            $scope.navs = NavServices.navs;
            $scope.showDots = true;

            IndexServices.getAllLatestArticles().success(function(data) {
                $scope.latest = data;
            });
        }
    ]);