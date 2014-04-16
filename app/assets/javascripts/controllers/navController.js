angular.module('autoControllers')
    .controller('NavCtrl', ['$scope','$location', 'NavServices',
        function($scope, $location, NavServices) {
            $scope.navs = [{
                name: 'קטלוג הרכב',
                img: '......',
                route: '/catalog'
            }, {
                name: 'כתבות',
                img: '......',
                route: '/articles'
            }, {
                name: 'מדריך קניה',
                img: '......',
                route: '/guide'
            }, {
                name: 'יעוץ חינם לקניית רכב',
                img: '......',
                route: '/'
            }, {
                name: 'מועדפים',
                img: '......',
                route: '/'
            }];

          $scope.isActive = function(index) {
            if ($location.url() === $scope.navs[index].route) return "active";
          };

          $scope.navigate = function(route) {
            console.log(route);
            $('#menu-button').click();
            $location.path(route);
          };
        }
    ]);
