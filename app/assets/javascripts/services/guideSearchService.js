angular.module('autoServices')
    .factory('GuideSearchService', ['$http',
        function($http) {
            var resource = {};
            var searchParams = {};

            resource.setSearchParams = function(params) {
                searchParams = params;
            };

            resource.getGuideSearchResult = function() {
                return $http.get('guide/search.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: searchParams
                });
            };

            return resource;
        }
    ]);