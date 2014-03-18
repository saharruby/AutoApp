angular.module('autoControllers')
    .controller('ModelUsedsCtrl', ['$scope', '$routeParams', 'ModelUsedsServices',
        function($scope, $routeParams, ModelUsedsServices) {
            if ($routeParams.id) {
                ModelUsedsServices.getAllModelUsedsByModelId($routeParams.id).success(function(data) {
                    $scope.useds = data;
                    console.log(data);
                });
            }
        }
    ]);