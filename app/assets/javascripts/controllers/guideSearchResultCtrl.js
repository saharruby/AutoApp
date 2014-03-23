angular.module('autoControllers')
    .controller('GuideSearchResultCtrl', ['$scope', 'GuideSearchService', 'CatalogServices',
        function($scope, GuideSearchService, CatalogServices) {
            GuideSearchService.getGuideSearchResult().success(function(data) {
                $scope.searchResults = data.searchResult;
                console.log(data);
            });

            $scope.setModelId = function(item_selected) {
                CatalogServices.setModel(item_selected);
            };
        }
    ]);