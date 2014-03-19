angular.module('autoControllers')
    .controller('ModelUsedsCtrl', ['$scope', '$routeParams', 'ModelUsedsServices',
        function($scope, $routeParams, ModelUsedsServices) {
            var modelID = $routeParams.id;
            var usedID = $routeParams.usedID;

            // if (modelID && usedID) {
            //     console.log('model & used id : ' + modelID + ' : ' + usedID);
            //     ModelUsedsServices.getAllModelUsedsByModelIDAndUsedID(modelID, usedID).success(function(data) {
            //         $scope.useds = data;
            //         console.log(data);
            //     });
            // } else
            if (modelID) {
                console.log('model id : ' + modelID);
                ModelUsedsServices.getAllModelUsedsByModelID(modelID).success(function(data) {
                    $scope.useds = data;
                    console.log(data);
                });
            }
        }
    ]);