angular.module('autoServices')
    .factory('ModelUsedsServices', ['$http',
        function($http) {
            var source = {};

            source.getAllModelUsedsByModelId = function(model_id) {
                return $http.get('models/' + model_id + '/used.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return source;
        }
    ]);