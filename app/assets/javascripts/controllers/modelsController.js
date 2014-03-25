angular.module('autoControllers')
    .controller('ModelsCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            $scope.manufacturerId = CatalogServices.getManufacturerId();
            $scope.newOrUsed = 'true';
            $scope.selectedIndex = 0;
            $scope.optionsArr = [{
                name: 'חדש',
                value: 'new=true'
            }, {
                name: 'משומש',
                value: 'new=false'
            }];

            ManufacturersServices.getAllModelsByManufacturerId($scope.manufacturerId).success(function(data) {
                $scope.models = {};
                angular.forEach(data, function(item, index) {
                    if (!$scope.models[item.name.charAt(0)]) {
                        $scope.models[item.name.charAt(0)] = {};
                        $scope.models[item.name.charAt(0)].key = '';
                        $scope.models[item.name.charAt(0)].collection = [];
                    }
                    $scope.models[item.name.charAt(0)].key = item.name.charAt(0);
                    $scope.models[item.name.charAt(0)].collection.push(item);
                });
            });

            $scope.itemClicked = function(index) {
                $scope.selectedIndex = index;
            };

            $scope.onSelectM = function(model) {
                CatalogServices.setModel(model);
                CatalogServices.setNewOrUsedData($scope.optionsArr[$scope.selectedIndex].value);
            };
        }
    ]);