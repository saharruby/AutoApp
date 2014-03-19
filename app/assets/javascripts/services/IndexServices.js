angular.module('autoServices')
    .factory('IndexServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllLatestArticles = function(manufacturerID) {
                return $http.get('articles/latest.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);