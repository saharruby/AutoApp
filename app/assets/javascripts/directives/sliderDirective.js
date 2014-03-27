angular.module('autoDirectives')
    .directive('slider', ['$timeout',
        function($timeout) {
            return {
                restrict: 'AE',
                // replace: true,
                scope: {
                    images: '=',
                    showdots: '='
                },
                link: function(scope, elem, attrs) {
                    scope.direction = 'left';
                    scope.currentIndex = 0;

                    scope.setCurrentSlideIndex = function(index) {
                        scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
                        scope.currentIndex = index;
                    };

                    scope.isCurrentSlideIndex = function(index) {
                        return scope.currentIndex === index;
                    };

                    scope.prevSlide = function() {
                        scope.direction = 'left';
                        scope.currentIndex = (scope.currentIndex < scope.images.length - 1) ? ++scope.currentIndex : 0;
                    };

                    scope.nextSlide = function() {
                        scope.direction = 'right';
                        scope.currentIndex = (scope.currentIndex > 0) ? --scope.currentIndex : scope.images.length - 1;
                    };
                },
                templateUrl: 'partials/sliderView.html'
            };
        }
    ]);