angular.module("main")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/articles', {
                    templateUrl:'templates/ArticlesListView'
                })
                .when('/articles/latest', {
                    templateUrl: 'templates/index'
                })
                .when('/catalog', {
                    templateUrl: 'templates/catalogView'
                })
                .when('/catalog/manufacturers', {
                    templateUrl: 'templates/manufacturersView'
                })
                .when('/catalog/manufacturers/:id', {
                    templateUrl: 'templates/allManufacturerModelsView'
                })
                .when('/catalog/manufacturers/:id/models/:id', {
                    templateUrl: 'templates/carModelView'
                })
                .when('/catalog/manufacturers/:id/models', {
                    templateUrl: 'templates/modelsView'
                })
                .when('/catalog/models/:id', {
                    templateUrl: 'templates/carModelView'
                })
                .when('/catalog/models/:id/used', {
                    templateUrl: 'templates/carModelView'
                })
                .when('/catalog/model/review/:id', {
                    templateUrl: 'templates/modelReviewView'
                })
                .when('/catalog/model/versions/:id', {
                    templateUrl: 'templates/modelVersionsView'
                })
                .when('/catalog/model/versions/', {
                    templateUrl: 'templates/modelVersionsView'
                })
                .when('/catalog/model/version/details/', {
                    templateUrl: 'templates/modelVersionDetailsView'
                })
                .when('/catalog/model/gallery', {
                    templateUrl: 'templates/modelGalleryView'
                })
                .when('/catalog/model/videos', {
                    templateUrl: 'templates/modelVideosView'
                })
                .when('/catalog/model/competitors', {
                    templateUrl: 'templates/modelCompetitorsView'
                })
                .when('/catalog/models/:id/useds', {
                    templateUrl: 'templates/modelUsedsView'
                })
                .when('/articles/:articleId', {
                    templateUrl: 'templates/articleView'
                })
                .when('/articles/category/:categoryId', {
                    templateUrl: 'templates/allArticlesOfCategoryView'
                })
                .when('/guide', {
                    templateUrl: 'templates/buyingGuideView'
                })
                .when('/guide/search', {
                    templateUrl: 'templates/guideSearchResultView'
                })
                .when('/articles', {
                    templateUrl: 'templates/articlesListView'
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
