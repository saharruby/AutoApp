angular.module('autoControllers')
    .controller('CatalogCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            $scope.manufacturer = {};
            $scope.model = {};
            $scope.manufactureId = 0;
            $scope.modelId = 0;
            $scope.newOrUsed = '';
            $scope.searchUrl = '';
            $scope.manufacturerName = 'כל היצרנים  >';
            $scope.modelName = 'כל הדגמים  >';

            $scope.$watch(CatalogServices.manufacturer, function(newData) {
                $scope.manufacturer = CatalogServices.getManufacturer();
                if ($scope.manufacturer && $scope.manufacturer.name) {
                    $scope.manufactureId = $scope.manufacturer.id;
                    $scope.manufacturerName = $scope.manufacturer.name + '  >';
                    $scope.searchUrl = 'articles/carcatalog/manufacturers/' + $scope.manufacturer.id + '?isSelected';
                }
            }, true);

            $scope.$watch(CatalogServices.model, function(newData) {
                $scope.model = CatalogServices.getModel();
                $scope.newOrUsed = CatalogServices.getNewOrUsed();

                if ($scope.model && $scope.model.name) {
                    $scope.modelId = $scope.model.id;
                    $scope.modelName = $scope.model.name + '  >';

                    if ($scope.newOrUsed === '' || $scope.newOrUsed === 'new=true') {
                        $scope.searchUrl = 'articles/carcatalog/manufacturers/' + $scope.manufacturer.id + '/models/' + $scope.model.id + '?isSelected';
                    } else {
                        $scope.searchUrl = 'carcatalog/models/' + $scope.model.id + '/useds?isSelected&' + $scope.newOrUsed;
                    }
                }
            }, true);
        }
    ]);