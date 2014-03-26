angular.module('autoControllers')
    .controller('ArticleListCtrl', ['$scope', '$timeout', 'NavServices', 'ArticlesServices', 'cfpLoadingBar',
        function($scope, $timeout, NavServices, ArticlesServices, cfpLoadingBar) {
            var dicTypes = {
                "1": 'חדשות הרכב',
                "2": 'מבחני רכב',
                "3": 'שטח',
                "4": 'ירוק',
                "5": 'ספורט מוטורי',
                "6": 'מגזין ודעות'
            };

            $scope.start = function() {
                cfpLoadingBar.start();
            };

            $scope.complete = function() {
                cfpLoadingBar.complete();
            };

            ArticlesServices.getAllArticles().success(function(data) {
                $scope.start();
                $scope.articlesCategoriesCollection = {};
                angular.forEach(dicTypes, function(item, key) {
                    $scope.articlesCategoriesCollection[key] = {
                        categoryName: item,
                        articles: []
                    };
                });
                angular.forEach(data, function(item, index) {
                    $scope.articlesCategoriesCollection[item.categoryId].articles.push(item);
                });
                $scope.complete();
                //NavServices.broadcastNavIdMsg('2');
            });
        }
    ]);