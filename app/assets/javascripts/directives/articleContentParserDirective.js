angular.module('autoDirectives')
.directive('articlecontentparser', [
  function() {
  return {
    restrict: 'E',
    scope: {
      trustedhtml: '@'
    },
    link: function(scope, element) {
      var fixIframes = function(newContent) {
        var iframe = $(newContent).find('iframe');
        var last_index = 0;

        angular.forEach(iframe, function(item, index) {
          $(item).attr({
            //"max-width": "100%",
            width: "100%",
            style: "max-width: 450px",
            height: "300px"
          });
          var s = newContent.indexOf('<iframe', last_index);
          var e = newContent.indexOf('</iframe>', last_index);

          newContent = newContent.substring(0, s) + $(item).prop('outerHTML') + newContent.substring(e + 9);
          last_index = e + 9;
        });
        return newContent;
      };

      var fixImages = function(newContent) {
        tmpElem = document.createElement('div');
        $(tmpElem).html(newContent);
        $('img',tmpElem).attr('class','img-responsive img-thumbnail').removeAttr('height').removeAttr('width');
        return $($('div',tmpElem)[0]).html(); //strip the outer div and return the modified html
      }
      scope.$watch('trustedhtml', function(newContent) {
        if (typeof(newContent) !== 'undefined' && newContent !== "") {
          newContent = '<div>' + newContent + '<div>';
          newContent = fixIframes(newContent);
          newContent = fixImages(newContent);
          element.html(newContent);
        }
      });
    }
  };
}
]);
