angular.module('autoControllers')
.controller('ModelGalleryCtrl', ['$scope', '$routeParams', 'matchmedia', 'GalleryServices',
            function($scope, $routeParams, matchmedia, GalleryServices) {
              $scope.gallery_id = $routeParams.id;
              $scope.doubleGallery = [];

              if (Modernizr.matchmedia) {
                var unregister = matchmedia.onPhone( function(mediaQueryList){
                  $scope.isPhone = mediaQueryList.matches;
                });
              }

              if ($scope.gallery_id) {
                GalleryServices.getAllModelGalleryByGalleryId($scope.gallery_id)
                .success(function(data) {
                  $scope.gallery = data;
                  angular.forEach(data, function(item, index) {
                    if (index % 2 === 0) {
                      var items = {
                        image1: data[index].imageUrl,
                        image2: (index < data.length -1) ? data[index+1].imageUrl : ""
                      };
                      $scope.doubleGallery.push(items);
                    }
                  });
                });
              }
            }
]);
