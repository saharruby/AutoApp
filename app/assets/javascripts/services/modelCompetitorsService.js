angular.module('autoServices')
    .factory('ModelCompetitorsServices', ['$http',
        function($http) {
            var source = {};

            source.getAllModelCompetitorsByCompetitorId = function(competitor_id) {
                return $http.get('competitors/' + competitor_id + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return source;
        }
    ]);