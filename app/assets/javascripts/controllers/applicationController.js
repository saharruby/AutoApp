angular.module('autoControllers')
.controller('application', ['$scope', '$location',
            function($scope, $location) {
              $scope.navigate = function(path) {
                $location.path(path);
              };

              $scope.isIOS6 = function() {
                return (/(iPhone|iPad|iPod)\sOS\s6/.test(navigator.userAgent));
              };
            }
]);
