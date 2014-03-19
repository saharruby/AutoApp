angular.module('autoServices')
    .factory('VersionsServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllModelVersionsByModelId = function(modelId) {
                return $http.get('models/' + modelId + '/versions.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getAllModelUsedsByModelIDAndUsedID = function(modelID, usedID) {
                return $http.get('models/' + modelID + '/usedID.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: {
                        model_id: modelID,
                        used_id: usedID
                    }
                });
            };

            return resource;
        }
    ]);