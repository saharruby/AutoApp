angular.module('autoServices')
    .factory('SearchServices', ['$http',
        function($http) {
            var resource = {};

            resource.getSearchResaulForAllManufacturerModels = function(manufacturerID) {
                return $http.get('manufacturer/' + manufacturerID + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getSearchResaulForModelByModelId = function(modelID) {
                return $http.get('models/' + modelID + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getModelUsedByUsedID = function(model_id, used_Id) {
                return $http.get('models/' + model_id + '/used.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: {
                        model_id: model_id,
                        used_id: used_Id
                    }
                });
            };

            // resource.getAllModelUsedsByModelIDAndUsedID = function(modelID, usedID) {
            //     return $http.get('models/' + modelID + '/usedID.json', {
            //         headers: {
            //             'Content-type': 'application/json'
            //         },
            //         params: {
            //             model_id: modelID,
            //             used_id: usedID
            //         }
            //     });
            // };

            return resource;
        }
    ]);