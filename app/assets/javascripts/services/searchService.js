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

    // resource.getModelUsedByModelIdAndUsedId = function(mID, uID) {
    //     return $http.get('models/' + mID + '?usedId=' + uID + '.json', {
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     });
    // };

            return resource;
        }
    ]);