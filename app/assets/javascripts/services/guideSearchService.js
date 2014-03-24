angular.module('autoServices')
    .factory('GuideSearchService', ['$http',
        function($http) {
            self = this;
            var resource = {};
            self.startVal = 0;
            self.totalVal = 0;
            self.limitVal = 0;

            self.searchParams = {
                id: ''
            };

            resource.setSearchParams = function(params) {
                self.searchParams.id = 'limit=20' + params;
            };

            resource.getSearchParams = function() {
                return self.searchParams;
            };

            resource.setStartPosition = function(startParam) {
                self.startVal = startParam;
            };

            resource.setEndPosition = function(endParam) {
                self.totalVal = endParam;
            };

            resource.setLimit = function(limitParam) {
                self.limitVal = limitParam;
            };

            resource.hasMoreDataToFatch = function() {
                return self.startVal + self.limitVal < self.totalVal;
            };

            resource.getGuideSearchResult = function() {
                return $http.get('guide/search.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: self.searchParams
                });
            };

            resource.getMoreItemsResults = function() {
                var moreSearchResults = {
                    id: self.searchParams.id + '&start=' + self.startVal + self.limitVal + '&total=' + self.totalVal
                };
                return $http.get('guide/search.json', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    params: moreSearchResults
                });
            };

            return resource;
        }
    ]);