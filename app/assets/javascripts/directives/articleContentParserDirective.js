angular.module('autoDirectives')
    .directive('articlecontentparser', ['$sce',
        function($sce) {
            return {
                restrict: 'E',
                scope: {
                    trustedhtml: '@'
                },
                link: function(scope, element) {
                    scope.$watch('trustedhtml', function(newContent) {
                        if (newContent != 'undefine') {
                            newContent = '<div>' + newContent + '<div>';
                            var iframe = $(newContent).find('iframe');
                            var last_index = 0;

                            angular.forEach(iframe, function(item, index) {
                                $(item).attr({
                                    width: "100%"
                                });
                                var s = newContent.indexOf('<iframe', last_index);
                                var e = newContent.indexOf('</iframe>', last_index);

                                newContent = newContent.substring(0, s) + $(item).prop('outerHTML') + newContent.substring(e + 9);
                                last_index = e + 9;
                            });

                            element.html($sce.trustAsHtml(newContent));
                        }
                    });
                }
            };
        }
    ]);