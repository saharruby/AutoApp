angular.module('autoControllers')
    .controller('ModelGalleryCtrl', ['$scope', '$routeParams', 'GalleryServices',
        function($scope, $routeParams, GalleryServices) {
            $scope.gallery_id = $routeParams.id;
            $scope.showDots = true;

            if ($scope.gallery_id) {
                GalleryServices.getAllModelGalleryByGalleryId($scope.gallery_id)
                    .success(function(data) {
                        $scope.gallery = data;
                    });
            }
        }
    ]);