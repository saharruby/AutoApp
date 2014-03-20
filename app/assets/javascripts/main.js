/* App Module */
var autoModuleApp = angular.module("main", [
    'ngRoute',
    'ngResource',
    'autoServices',
    'autoControllers',
    'autoDirectives',
    'ngAnimate',
    'chieffancypants.loadingBar',
]).config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

/* App Module Dependencies*/
var autoControllers = angular.module('autoControllers', []);
var autoDirectives = angular.module('autoDirectives', []);
var autoServices = angular.module('autoServices', ['ngResource']);