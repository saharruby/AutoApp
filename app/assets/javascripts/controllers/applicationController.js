angular.module('autoControllers')
.controller('application', ['$scope', '$location', 'ArticlesServices',
            function($scope, $location, ArticlesService) {
              $scope.navigate = function(path) {
                $location.path(path);
              };

              $scope.showArticle = function(article) {
                ArticlesService.currentCategory = article.categoryId !== 0 ? article.categoryId : 1;
                $location.path("/articles/" + article.articleId);
              };

              $scope.isPhone = Modernizr.mq('(max-width: 767px)');

              $scope.isIOS6or5 = (/(iPhone|iPad|iPod)\sOS\s(5|6)/.test(navigator.userAgent));
            }
]);
