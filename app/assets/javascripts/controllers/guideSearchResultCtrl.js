angular.module('autoControllers')
    .controller('GuideSearchResultCtrl', ['$scope', 'GuideSearchService', 'CatalogServices',
        function($scope, GuideSearchService, CatalogServices) {
            $scope.busy = true;
            $scope.empty = true;

            GuideSearchService.getGuideSearchResult().success(function(data) {
                $scope.searchResults = data.searchResult;
                setMoreDataParams(data.limit, data.start, data.total);
                $scope.busy = false;
                console.log($scope.searchResults);

                /// TODO: fix bug when sending only country=:id get searchResults 'undefined'....
                if ($scope.searchResults == 'undefined' || !$scope.searchResults.length > 0) {
                    $scope.empty = true;
                }
                console.log(data);
            });

            $scope.addMoreItems = function() {
                if (!$scope.busy) {
                    if (GuideSearchService.hasMoreDataToFatch()) {
                        $scope.busy = true;
                        GuideSearchService.getMoreItemsResults().success(function(data) {
                            if ($scope.searchResults) {
                                $scope.searchResults.push.apply($scope.searchResults, data.searchResult);
                                setMoreDataParams(data.limit, data.start, data.total);
                                $scope.busy = false;
                            }
                            console.log(data);
                        });
                    }
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