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

            resource.getModelVersionDetailsByModelIDAndVersionID = function(modelID, versionID) {
                return $http.get('models/' + modelID + '/versions/' + versionID + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: {
                        model_id: modelID,
                        version_id: versionID
                    }
                });
            };

            return resource;
        }
    ]);