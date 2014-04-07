angular.module('autoControllers')
    .controller('AllManufacturerModelsCtrl', ['$scope','$routeParams', 'SearchServices', 'CatalogServices',
        function($scope, $routeParams, SearchServices, CatalogServices) {
            $scope.manufacturerId = $routeParams.id;

            if ($scope.manufacturerId) {
                SearchServices.getSearchResaulForAllManufacturerModels($scope.manufacturerId).success(function(data) {
                    $scope.models = data;
                });
            }

            $scope.setModelId = function(model) {
                CatalogServices.setModel(model);
            };
        }
    ]);
