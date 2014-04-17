angular.module('autoServices')
    .factory('NavServices', [
        function() {
            var sharedService = {};

            sharedService.navIdMsg = '';

            sharedService.navs = [{
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

            return sharedService;
        }
    ]);
