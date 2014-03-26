angular.module('autoDirectives')
    .directive('infinityScroll',
        function() {
            return {
                restrics: 'A',
                link: function(scope, elm, attr) {
                    $(window).bind('scroll', function() {
                        if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
                            scope.$apply(attr.infinityscroll);
                            console.log('infinity scroll fire');
                        }
                    });

                    elm.bind("$destroy", function() {
                        $(window).unbind('scroll');
                        console.log("element removed");
                    });
                }
            };
        }
);