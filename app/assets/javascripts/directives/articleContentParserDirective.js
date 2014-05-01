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

        tmpElem = document.createElement('section');
        $(tmpElem).html(newContent);
        $('iframe',tmpElem).attr({
          width: "100%",
          style: "max-width: 450px",
          height: "300px"
        });
        return tmpElem.innerHTML;
      };

      var fixImages = function(newContent) {
        tmpElem = document.createElement('section'); //create a pseodu element in the dom in order to manipulate it with jQuery
        $(tmpElem).html(newContent);
        $('img',tmpElem).attr('class','img-responsive img-thumbnail').removeAttr('height').removeAttr('width');
        return tmpElem.innerHTML; //strip the outer section and return the modified html
      };

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
