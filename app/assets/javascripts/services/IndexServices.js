angular.module('autoServices')
    .factory('IndexServices', ['$http',
        function($http) {
            var resource = {};

            resource.latestIndex = 0;

            resource.getAllLatestArticles = function(manufacturerID) {
                return $http.get('articles?category=1&count=4', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);
