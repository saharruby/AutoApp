angular.module('autoDirectives')
    .directive('infinityscroll',
        function() {
            return function(scope, elm, attr) {
                $(window).bind('scroll', function() {
                    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
                        scope.$apply(attr.infinityscroll);
                        console.log('infinity scroll fire');
                    }
                });
            };
        }
);