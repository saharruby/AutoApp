angular.module('autoServices')
    .factory('NavServices', ['$rootScope',
        function($rootScope) {
            var sharedService = {};

            sharedService.navIdMsg = '';

            sharedService.broadcastNavIdMsg = function(id) {
                this.navIdMsg = id;
                this.broadcast('handelNavIdChanged');
            };

            sharedService.broadcast = function(eventMsg) {
                $rootScope.$broadcast(eventMsg);
                console.log('SEND EVENT : ' + eventMsg);
            };

            sharedService.navs = [{
                name: 'כתבות אחרונות',
                img: '......',
                route: '#/articles/latest'
            }, {
                name: 'קטלוג הרכב',
                img: '......',
                route: '#/articles/carcatalog'
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