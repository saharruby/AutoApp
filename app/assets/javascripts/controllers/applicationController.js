angular.module('autoControllers')
.controller('application', ['$scope', '$location',
            function($scope, $location) {
              $scope.navigate = function(path) {
                $location.path(path);
              };
              $scope.isPhone = Modernizr.mq('(max-width: 767px)');

              $scope.isIOS6or5 = (/(iPhone|iPad|iPod)\sOS\s(5|6)/.test(navigator.userAgent));
            }
]);
