angular.module('autoServices')
    .factory('IndexServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllLatestArticles = function(manufacturerID) {
                return $http.get('articles/latest', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);
