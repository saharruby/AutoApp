angular.module('autoControllers')
    .controller('ArticleCtrl', ['$scope', '$routeParams', 'ArticlesServices',
        function($scope, $routeParams, ArticlesServices) {
            $scope.article_id = $routeParams.articleId;
            $scope.categoryId = ArticlesServices.currentCategory ? ArticlesServices.currentCategory : 1;

            ArticlesServices.getArticleById($scope.article_id).success(function(data) {
                $scope.article = data[0];
            });
        }
    ]);
