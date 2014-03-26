angular.module('autoControllers')
    .controller('GuideSearchResultCtrl', ['$scope', 'GuideSearchService', 'CatalogServices',
        function($scope, GuideSearchService, CatalogServices) {
            $scope.busy = false;
            $scope.empty = true;
            $scope.hasdata = true;

            GuideSearchService.getGuideSearchResult().success(function(data) {
                $scope.searchResults = data.searchResult;
                setMoreDataParams(data.limit, data.start, data.total);
                $scope.busy = false;

                if (angular.isUndefined($scope.searchResults) || $scope.searchResults.length <= 0) {
                    $scope.empty = false;
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
                    } else {
                        //TODO: send event to 'infinityscrollDirective' to remove window binding to 'scroll' event....
                        $scope.hasdata = false;
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