angular.module('autoControllers')
    .controller('ModelUsedsCtrl', ['$scope', '$routeParams', 'ModelUsedsServices',
        function($scope, $routeParams, ModelUsedsServices) {
            var modelID = $routeParams.id;
            var newOrUsed = $routeParams.new;

            // if (modelID && newOrUsed) {
            //     console.log('model & used id : ' + modelID + ' : ' + newOrUsed);
            //     ModelUsedsServices.getAllModelUsedsByModelIDAndUsedID(modelID, newOrUsed).success(function(data) {
            //         $scope.useds = data;
            //         console.log(data);
            //     });
            // } else
            if (modelID) {
                console.log('model id : ' + modelID);
                ModelUsedsServices.getAllModelUsedsByModelID(modelID).success(function(data) {
                    $scope.usedsModels = data;

                    // $(document).foundation();
                    console.log(data);
                });
            }
        }
    ]);