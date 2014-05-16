angular.module('autoControllers')
    .controller('ArticleCtrl', ['$scope', '$routeParams', '$timeout', 'ArticlesServices',
        function($scope, $routeParams, $timeout, ArticlesServices) {
            $scope.article_id = $routeParams.articleId;
            $scope.categoryId = ArticlesServices.currentCategory ? ArticlesServices.currentCategory : 1;

            ArticlesServices.getArticleById($scope.article_id).then(function(data) {
                $scope.article = data[0];
                window.scrollTo(0,0);
            });
        }
    ]);
