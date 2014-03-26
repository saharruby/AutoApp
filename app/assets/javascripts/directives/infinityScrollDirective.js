angular.module('autoDirectives')
    .directive('infinityScroll',
        function() {
            return function(scope, elm, attr) {
                $(window).bind('scroll', function() {
                    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
                        scope.$apply(attr.infinityScroll);
                        console.log('infinity scroll fire');
                    }
                });

                elm.bind("$destroy", function() {
                    $(window).unbind('scroll');
                    console.log("window unbind 'scroll' event ");
                });
            };
        }
);