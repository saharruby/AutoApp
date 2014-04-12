angular.module("main")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/articles', {
                    templateUrl:'templates/ArticlesListView',
                    controller: 'ArticleListCtrl'
                })
                .when('/articles/latest', {
                    templateUrl: 'templates/Index',
                    controller: 'IndexCtrl'
                })
                .when('/catalog', {
                    templateUrl: 'templates/catalogView',
                    controller: 'CatalogCtrl'
                })
                .when('/catalog/manufacturers', {
                    templateUrl: 'templates/manufacturersView',
                    controller: 'ManufacturersCtrl'
                })
                .when('/catalog/manufacturers/:id', {
                    templateUrl: 'templates/allManufacturerModelsView',
                    controller: 'AllManufacturerModelsCtrl'
                })
                .when('/catalog/manufacturers/:id/models/:id', {
                    templateUrl: 'templates/carModelView',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/manufacturers/:id/models', {
                    templateUrl: 'templates/modelsView',
                    controller: 'ModelsCtrl'
                })
                .when('/catalog/models/:id', {
                    templateUrl: 'templates/carModelView',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/models/:id/used', {
                    templateUrl: 'templates/carModelView',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/model/review/:id', {
                    templateUrl: 'templates/modelReviewView',
                    controller: 'CarModelCtrl'
                })
                .when('/catalog/model/versions/:id', {
                    templateUrl: 'templates/modelVersionsView',
                    controller: 'ModelVersionsCtrl'
                })
                .when('/catalog/model/versions/', {
                    templateUrl: 'templates/modelVersionsView',
                    controller: 'ModelVersionsCtrl'
                })
                .when('/catalog/model/version/details/', {
                    templateUrl: 'templates/modelVersionDetailsView',
                    controller: 'ModelVersionDetailsCtrl'
                })
                .when('/catalog/model/gallery', {
                    templateUrl: 'templates/modelGalleryView',
                    controller: 'ModelGalleryCtrl'
                })
                .when('/catalog/model/videos', {
                    templateUrl: 'templates/modelVideosView',
                    controller: 'ModelVideosCtrl'
                })
                .when('/catalog/model/competitors', {
                    templateUrl: 'templates/modelCompetitorsView',
                    controller: 'ModelCompetitorsCtrl'
                })
                .when('/catalog/models/:id/useds', {
                    templateUrl: 'templates/modelUsedsView',
                    controller: 'ModelUsedsCtrl'
                })
                .when('/articles/:articleId', {
                    templateUrl: 'templates/articleView',
                    controller: 'ArticleCtrl'
                })
                .when('/articles/category/:categoryId', {
                    templateUrl: 'templates/allArticlesOfCategoryView',
                    controller: 'ArticlesCategoryCtrl'
                })
                .when('/guide', {
                    templateUrl: 'templates/buyingGuideView',
                    controller: 'BuyingGuideCtrl'
                })
                .when('/guide/search', {
                    templateUrl: 'templates/guideSearchResultView',
                    controller: 'GuideSearchResultCtrl'
                })
                .when('/articles', {
                    templateUrl: 'templates/articlesListView',
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
