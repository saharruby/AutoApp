/* App Module */
var autoModuleApp = angular.module("main", [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngTouch',
  'angular-carousel',
  'matchmedia-ng',
  'chieffancypants.loadingBar',
  'autoServices',
  'autoControllers',
  'autoDirectives'
]);//.config(function(cfpLoadingBarProvider) {
//  cfpLoadingBarProvider.includeSpinner = true;
//});

autoModuleApp.run(["$window", "$templateCache", function($window, $templateCache) {
  angular.forEach($window.JST, function(elem,index) {
    $templateCache.put(index,elem());
  });
}]);
/* App Module Dependencies*/
var autoControllers = angular.module('autoControllers', []);
var autoDirectives = angular.module('autoDirectives', []);
var autoServices = angular.module('autoServices', ['ngResource']);


