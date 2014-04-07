angular.module('autoControllers')
    .controller('NavCtrl', ['$scope', 'NavServices',
        function($scope, NavServices) {
            $scope.navs = [{
                name: 'כתבות אחרונות',
                img: '......',
                route: '#/articles/latest'
            }, {
                name: 'קטלוג הרכב',
                img: '......',
                route: '#/catalog'
            }, {
                name: 'כתבות',
                img: '......',
                route: '#/articles'
            }, {
                name: 'מדריך קניה',
                img: '......',
                route: '#/guide'
            }, {
                name: 'יייעוץ חינם לקניית רכב',
                img: '......',
                route: '#'
            }, {
                name: 'מועדפים',
                img: '......',
                route: '#'
            }];
        }
    ]);
