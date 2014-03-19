angular.module('autoControllers')
    .controller('ModelGalleryCtrl', ['$scope', '$routeParams', '$timeout', 'GalleryServices',
        function($scope, $routeParams, $timeout, GalleryServices) {
            $scope.gallery_id = $routeParams.id;

            if ($scope.gallery_id) {
                GalleryServices.getAllModelGalleryByGalleryId($scope.gallery_id)
                    .success(function(data) {
                        $scope.gallery = data;
                        //use $timeout with 0 to run code after the dom finished rendering by angular
                        //see http://stackoverflow.com/questions/12240639/angularjs-how-can-i-run-a-directive-after-the-dom-has-finished-rendering
                        $timeout(function() {
                            $(document).foundation();
                        });
                    });
            }
        }

    ]);