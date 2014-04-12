angular.module('autoServices')
.factory('ArticlesServices', ['$http',
         function($http) {
           var resource = {};

           resource.getAllArticles = function() {
             return $http.get('articles', {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           resource.getAllArticlesByCatregoryId = function(categoryId) {
             return $http.get('articles?categoryId=' + categoryId, {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           resource.getArticleById = function(articleId) {
             return $http.get('articles/' + articleId, {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           return resource;
         }
]);
