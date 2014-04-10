/* App Module */
var autoModuleApp = angular.module("main", [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngTouch',
  'angular-carousel',
  'chieffancypants.loadingBar',
  'autoServices',
  'autoControllers',
  'autoDirectives'
]).config(function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = true;
});

/* App Module Dependencies*/
var autoControllers = angular.module('autoControllers', []);
var autoDirectives = angular.module('autoDirectives', []);
var autoServices = angular.module('autoServices', ['ngResource']);

//// for firefox: to disable draging and anable touch swipe events
$(document).on("dragstart", function() {
  return false;
});
