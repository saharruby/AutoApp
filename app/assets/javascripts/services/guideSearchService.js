angular.module('autoServices')
    .factory('GuideSearchService', ['$http',
        function($http) {
            self = this;
            var resource = {};
            self.startVal = 0;
            self.totalVal = 0;

            self.searchParams = {};

            resource.setSearchParams = function(params) {
                self.searchParams = params;
            };

            resource.getSearchParams = function() {
                return self.searchParams;
            };

            resource.setStartPosition = function(startParam) {
                self.searchParams.start = startParam;
            };

            resource.setEndPosition = function(endParam) {
                self.searchParams.end = endParam;
            };

            resource.setLimit = function(limitParam) {
                self.searchParams.limit = limitParam;
            };

            resource.hasMoreDataToFatch = function() {
                return self.startVal + self.searchParam.limit < self.totalVal;
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
                var newStart = self.startVal + self.searchParams.limit;
                var moreSearchResults = angular.copy(self.searchParams);
                moreSearchResults.start = newStart;
                moreSearchResults.total = self.totalVal;
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
