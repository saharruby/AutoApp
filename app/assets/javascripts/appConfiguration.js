angular.module("main")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/articles', {
                    templateUrl: 'partials/ArticlesListView.html',
                    controller: 'ArticleListCtrl'
                })
                .when('/articles/latest', {
                    templateUrl: 'partials/Index.html',
                    controller: 'IndexCtrl'
                })
                .when('/catalog', {
                    templateUrl: 'partials/catalogView.html',
                    controller: 'CatalogCtrl'
                })
                .when('/catalog/manufacturers', {
                    templateUrl: 'partials/manufacturersView.html',
                    controller: 'ManufacturersCtrl'
                })
                .when('/catalog/manufacturers/:id', {
                    templateUrl: 'partials/allManufacturerModelsView.html',
                    controller: 'AllManufacturerModelsCtrl'
                })
                .when('/catalog/manufacturers/:id/models/:id', {
                    templateUrl: 'partials/carModelView.html',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/manufacturers/:id/models', {
                    templateUrl: 'partials/modelsView.html',
                    controller: 'ModelsCtrl'
                })
                .when('/catalog/models/:id', {
                    templateUrl: 'partials/carModelView.html',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/models/:id/used', {
                    templateUrl: 'partials/carModelView.html',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/model/review/:id', {
                    templateUrl: 'partials/modelReviewView.html',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/model/versions/:id', {
                    templateUrl: 'partials/modelVersionsView.html',
                    controller: 'ModelVersionsCtrl'
                })
                .when('/catalog/model/versions/', {
                    templateUrl: 'partials/modelVersionsView.html',
                    controller: 'ModelVersionsCtrl'
                })
                .when('/catalog/model/version/details/', {
                    templateUrl: 'partials/modelVersionDetailsView.html',
                    controller: 'ModelVersionDetailsCtrl'
                })
                .when('/catalog/model/gallery', {
                    templateUrl: 'partials/modelGalleryView.html',
                    controller: 'ModelGalleryCtrl'
                })
                .when('/catalog/model/videos', {
                    templateUrl: 'partials/modelVideosView.html',
                    controller: 'ModelVideosCtrl'
                })
                .when('/catalog/model/competitors', {
                    templateUrl: 'partials/modelCompetitorsView.html',
                    controller: 'ModelCompetitorsCtrl'
                })
                .when('/catalog/models/:id/useds', {
                    templateUrl: 'partials/modelUsedsView.html',
                    controller: 'ModelUsedsCtrl'
                })
                .when('/articles/:articleId', {
                    templateUrl: 'partials/articleView.html',
                    controller: 'ArticleCtrl'
                })
                .when('/articles/category/:categoryId', {
                    templateUrl: 'partials/allArticlesOfCategoryView.html',
                    controller: 'ArticlesCategoryCtrl'
                })
                .when('/guide', {
                    templateUrl: 'partials/buyingGuideView.html',
                    controller: 'BuyingGuideCtrl'
                })
                .when('/guide/search', {
                    templateUrl: 'partials/guideSearchResultView.html',
                    controller: 'GuideSearchResultCtrl'
                })
                .when('/articles', {
                    templateUrl: 'partials/articlesListView.html',
                    controller: 'ArticleListCtrl'
                })
                .otherwise({
                    redirectTo: '/articles/latest'
                });
        }
    ]);

angular.module("main").run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function() {
        //$(document).foundation('reflow');
        console.log('$routeChangeSuccess');
    });
});
