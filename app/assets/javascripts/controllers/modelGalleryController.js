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
                            $(document).foundation('orbit', {
                                animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
                                timer_speed: 5000, // Sets the amount of time in milliseconds before transitioning a slide
                                pause_on_hover: false, // Pauses on the current slide while hovering
                                resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
                                next_on_click: true, // Advance to next slide on click
                                animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
                                stack_on_small: false
                                // timer: false
                            });
                        });
                    });
            }
        }
    ]);