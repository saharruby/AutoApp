angular.module('autoServices')
.factory('ArticlesServices', ['$http',
         function($http) {
           var resource = {};

           resource.categories = {
             "1": 'חדשות הרכב',
             "2": 'מבחני רכב',
             "3": 'שטח',
             "4": 'ירוק',
             "5": 'ספורט מוטורי',
             "6": 'מגזין ודעות'
           };

           resource.getAllArticles = function() {
             return $http.get('articles', {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           resource.getAllArticlesByCatregoryId = function(categoryId) {
             return $http.get('articles?category=' + categoryId + "&count=10", {
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
