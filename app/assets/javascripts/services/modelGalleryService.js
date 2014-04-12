angular.module('autoServices')
.factory('GalleryServices', ['$http',
         function($http) {
           var resource = {};

           resource.getAllModelGalleryByGalleryId = function(galleryId) {
             return $http.get('galleries/' + galleryId, {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           return resource;
         }
]);
