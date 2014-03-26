angular.module('autoControllers')
    .controller('ModelVideosCtrl', ['$scope', '$routeParams', '$sce', '$timeout', 'ModelVideosServices',
        function($scope, $routeParams, $sce, $timeout, ModelVideosServices) {
            $scope.switchView = false;
            $scope.defaultVideoText = '';
            $scope.videoUrl = '';

            $scope.changeView = function(videoUrl) {
                $scope.videoUrl = $sce.trustAsResourceUrl(videoUrl);
                $scope.switchView = !$scope.switchView;

                $timeout(function() {
                    $(document).foundation();
                });
            };

            ModelVideosServices.getAllModelVideosByVideoId($routeParams.id).success(function(data) {
                $scope.videos = data;
                if ($scope.videos.length === 0) {
                    $scope.defaultVideoText = 'לא קיימים סרטי וידאו לדגם זה';
                }
                $(document).foundation();
                console.log(data);
            });
        }
    ]);