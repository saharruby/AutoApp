angular.module('autoControllers')
    .controller('IndexCtrl', ['$scope', '$timeout', 'IndexServices',
        function($scope, $timeout, IndexServices) {
            IndexServices.getAllLatestArticles().success(function(data) {
                $scope.latest = data;

                $timeout(function() {
                    $(document).foundation('orbit', {
                        animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
                        // timer_speed: 5000, // Sets the amount of time in milliseconds before transitioning a slide
                        pause_on_hover: false, // Pauses on the current slide while hovering
                        resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
                        next_on_click: true, // Advance to next slide on click
                        animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
                        stack_on_small: false,
                        timer: false
                    });
                });
                console.log(data);
            });
        }
    ]);