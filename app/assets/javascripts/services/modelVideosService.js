angular.module('autoServices')
    .factory('ModelVideosServices', ['$http',
        function($http) {
            var source = {};

            source.getAllModelVideosByVideoId = function(videoId) {
                return $http.get('videos/' + videoId + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return source;
        }
    ]);