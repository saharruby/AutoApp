angular.module('autoControllers')
    .controller('ArticleListCtrl', ['$scope', '$timeout', '$location', 'NavServices', 'ArticlesServices', 'cfpLoadingBar',
        function($scope, $timeout, $location, NavServices, ArticlesServices, cfpLoadingBar) {
            var dicTypes = {
                "1": 'חדשות הרכב',
                "2": 'מבחני רכב',
                "3": 'שטח',
                "4": 'ירוק',
                "5": 'ספורט מוטורי',
                "6": 'מגזין ודעות'
            };
            $scope.colWidth = "col-xs-6";
//TODO: matchmedia is breaking ng-click for some reason...
/*            matchmedia.onLandscape(function(media) {*/
              //if (media.matches) {
                //$scope.colWidth = "col-xs-6";
                //console.log($scope.colWidth);
              //}
            //}, $scope);

            //matchmedia.onPortrait(function(media) {
              //if (media.matches) {
                //$scope.colWidth = "col-xs-12";
                //console.log($scope.colWidth);
              //}
            /*}, $scope);*/


            $scope.start = function() {
                cfpLoadingBar.start();
            };

            $scope.complete = function() {
                cfpLoadingBar.complete();
            };

            $scope.getBigImage = function(imageUrl) {
              var name = imageUrl.split('.jpg')[0];
              return name + "-4.jpg"
            };

            $scope.showArticle = function(article) {
              console.log('show article');
              $location.path("/articles/" + article.articleId);
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
