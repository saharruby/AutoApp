angular.module('autoControllers')
    .controller('ArticleCtrl', ['$scope', '$routeParams', 'ArticlesServices',
        function($scope, $routeParams, ArticlesServices) {
            $scope.article_id = $routeParams.articleId;

            ArticlesServices.getArticleById($scope.article_id).success(function(data) {
                $scope.article = data[0];
            });
        }
    ]);