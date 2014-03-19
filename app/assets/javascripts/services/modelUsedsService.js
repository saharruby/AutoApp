angular.module('autoServices')
    .factory('ModelUsedsServices', ['$http',
        function($http) {
            var source = {};

            source.getAllModelUsedsByModelID = function(model_id) {
                return $http.get('models/' + model_id + '/used.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            // source.getAllModelUsedsByModelIDAndUsedID = function(modelID, usedID) {
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

            return source;
        }
    ]);