/* App Module */
var autoModuleApp = angular.module("main", [
    'ngRoute',
    'ngResource',
    'autoServices',
    'autoControllers',
    'autoDirectives',
    'ngAnimate',
    'ngTouch',
    'chieffancypants.loadingBar',
]).config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});
// .animation('.slide-animation',
//     function() {
//         return {
//             addClass: function(element, className, done) {
//                 var scope = element.scope();

//                 if (className == 'ng-hide') {
//                     /* Code omitted */
//                 } else {
//                     done();
//                 }
//             },
//             removeClass: function(element, className, done) {
//                 var scope = element.scope();

//                 if (className == 'ng-hide') {
//                     element.removeClass('ng-hide');

//                     /* Code omitted */
//                 } else {
//                     done();
//                 }
//             }
//         };
//     });
/* App Module Dependencies*/
var autoControllers = angular.module('autoControllers', []);
var autoDirectives = angular.module('autoDirectives', []);
var autoServices = angular.module('autoServices', ['ngResource']);