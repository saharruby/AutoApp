angular.module('autoDirectives')
    .directive('slider', ['$timeout',
        function($timeout) {
            return {
                restrict: 'AE',
                scope: {
                    images: '=',
                    showdots: '='
                },
                link: function(scope, elem, attrs) {
                    scope.direction = '';
                    scope.currentIndex = 0;

                    scope.setCurrentSlideIndex = function(index) {
                        scope.direction = (index > scope.currentIndex) ? 'left' : '';
                        scope.currentIndex = index;
                    };

                    scope.isCurrentSlideIndex = function(index) {
                        return scope.currentIndex === index;
                    };

                    scope.prevSlide = function() {
                        scope.direction = 'left';
                        $timeout(function() {
                            scope.currentIndex = (scope.currentIndex < scope.images.length - 1) ? ++scope.currentIndex : 0;
                        });
                    };

                    scope.nextSlide = function() {
                        scope.direction = 'right';
                        $timeout(function() {
                            scope.currentIndex = (scope.currentIndex > 0) ? --scope.currentIndex : scope.images.length - 1;
                        });
                    };

                    // //for change images in silde show...
                    // var timer;
                    // var sliderFunc = function() {
                    //     timer = $timeout(function() {
                    //         scope.nextSlide();
                    //         timer = $timeout(sliderFunc, 1000);
                    //     }, 3000);
                    // };

                    // sliderFunc();

                    // scope.$on('$destroy', function() {
                    //     $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
                    // });
                },
                templateUrl: 'partials/sliderView.html'
            };
        }
    ]);