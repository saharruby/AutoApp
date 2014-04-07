angular.module('autoControllers')
    .controller('ManufacturersCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            ManufacturersServices.getAllManufacturers().success(function(data) {
                $scope.manufacturers = {};
                angular.forEach(data, function(item, index) {
                    if (!$scope.manufacturers[item.name.charAt(0)]) {
                        $scope.manufacturers[item.name.charAt(0)] = {};
                        $scope.manufacturers[item.name.charAt(0)].key = '';
                        $scope.manufacturers[item.name.charAt(0)].collection = [];
                    }
                    $scope.manufacturers[item.name.charAt(0)].key = item.name.charAt(0);
                    $scope.manufacturers[item.name.charAt(0)].collection.push(item);
                });

                $(document).foundation();
            });

            $scope.onSelectMF = function(manufacturer) {
                CatalogServices.setManufacturer(manufacturer);
                CatalogServices.setModel(undefined);
            };
        }
    ]);
