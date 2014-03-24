angular.module('autoControllers')
    .controller('GuideSearchResultCtrl', ['$scope', 'GuideSearchService', 'CatalogServices',
        function($scope, GuideSearchService, CatalogServices) {
            $scope.busy = true;

            GuideSearchService.getGuideSearchResult().success(function(data) {
                $scope.busy = false;
                $scope.searchResults = data.searchResult;
                setMoreDataParams(data.limit, data.start, data.total);
                console.log(data);
            });

            $scope.addMoreItems = function() {
                if (GuideSearchService.hasMoreDataToFatch()) {
                    $scope.busy = true;
                    GuideSearchService.getMoreItemsResults().success(function(data) {
                        $scope.busy = false;
                        $scope.searchResults.push.apply($scope.searchResults, data.searchResult);
                        setMoreDataParams(data.limit, data.start, data.total);
                        console.log(data);
                    });
                }
            };

            $scope.setModelId = function(item_selected) {
                CatalogServices.setModel(item_selected);
            };

            function setMoreDataParams(limit, start, total) {
                GuideSearchService.setStartPosition(start);
                GuideSearchService.setEndPosition(total);
                GuideSearchService.setLimit(limit);
            }
        }
    ]);