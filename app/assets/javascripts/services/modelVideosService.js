angular.module('autoServices')
.factory('ModelVideosServices', ['$http',
         function($http) {
           var source = {};

           source.getAllModelVideosByVideoId = function(videoId) {
             return $http.get('videos/' + videoId, {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           return source;
         }
]);
