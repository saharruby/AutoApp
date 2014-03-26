angular.module('autoControllers')
    .controller('BuyingGuideCtrl', ['$scope', '$timeout', 'GuideSearchService',
        function($scope, $timeout, GuideSearchService) {
            $scope.showScroll = false;
            $scope.currentFilterKey = -1;
            $scope.collection = [];
            $scope.selectedIndex = -1;

            $scope.navsData = [{
                title: 'בחר קטגוריה',
                value: '',
                key: 0
            }, {
                title: 'בחר טווח מחירים',
                value: '',
                key: 1
            }, {
                title: 'בחר ארץ מוצא',
                value: '',
                key: 2
            }, {
                title: 'בחר נפח מנוע',
                value: '',
                key: 3
            }];

            var categoryCollection = [{
                value: 0,
                title: 'מיני / סופרמיני'
            }, {
                value: 1,
                title: 'משפחתיות / קטנות'
            }, {
                value: 2,
                title: 'משפחתיות / קומפקטיות'
            }, {
                value: 3,
                title: 'משפחתיות גדולות / מנהלים'
            }, {
                value: 4,
                title: 'סאלון'
            }, {
                value: 6,
                title: 'מיניוואן (עד 6 מושבים)'
            }, {
                value: 7,
                title: 'מיניוואן (7 מושבים ויותר)'
            }, {
                value: 8,
                title: 'פנאי / שטח בנוני'
            }, {
                value: 9,
                title: 'פנאי / שטח גדול'
            }, {
                value: 10,
                title: 'פנאי / שטח יוקרה'
            }, {
                value: 11,
                title: 'ספורטיביות'
            }, {
                value: 12,
                title: 'קופה קבריולה'
            }, {
                value: 13,
                title: 'טנדרים'
            }, {
                value: 14,
                title: 'מסחריות קטנות'
            }, {
                value: 15,
                title: 'היברידי'
            }, {
                value: 16,
                title: 'מכוניות על'
            }];

            var priceRangeCollection = [{
                value: 0,
                title: 'עד 95,000'
            }, {
                value: 1,
                title: '95,000 - 120,000'
            }, {
                value: 2,
                title: '120,000 - 140,000'
            }, {
                value: 3,
                title: '140,000 - 165,000'
            }, {
                value: 4,
                title: '165,000 - 210,000'
            }, {
                value: 5,
                title: '210,000 - 300,000'
            }, {
                value: 6,
                title: 'מעל ל- 300,000'
            }];

            var countryCollection = [{
                value: 0,
                title: "יפן"
            }, {
                value: 1,
                title: 'ארה"ב'
            }, {
                value: 2,
                title: "קוריאה"
            }, {
                value: 3,
                title: "גרמניה"
            }, {
                value: 4,
                title: "איטליה"
            }, {
                value: 5,
                title: "אנגליה"
            }, {
                value: 6,
                title: "צרפת"
            }, {
                value: 7,
                title: "ספרד"
            }, {
                value: 8,
                title: "שבדיה"
            }, {
                value: 9,
                title: "צ'כיה"
            }];

            var engineCapacityCollection = [{
                value: 0,
                title: 'עד 1.4 ליטר'
            }, {
                value: 1,
                title: '1.4 - 1.6 ליטר'
            }, {
                value: 2,
                title: '1.6 - 1.8 ליטר'
            }, {
                value: 3,
                title: '1.8 - 2. 0 ליטר'
            }, {
                value: 4,
                title: '2.0  - 2.5 ליטר'
            }, {
                value: 5,
                title: '2.5 - 3.0'
            }, {
                value: 6,
                title: 'מעל 3.0 ליטר'
            }];

            var filtersNames = {
                0: {
                    name: 'category=',
                    value: -1
                },
                1: {
                    name: 'price_range=',
                    value: -1
                },
                2: {
                    name: 'country=',
                    value: -1
                },
                3: {
                    name: 'engine=',
                    value: -1
                }
            };

            var dicCollections = {
                0: categoryCollection,
                1: priceRangeCollection,
                2: countryCollection,
                3: engineCapacityCollection
            };

            $scope.showFilter = function(navKey) {
                $scope.collection = dicCollections[navKey];
                $scope.currentFilterKey = navKey;
                $scope.showScroll = true;
            };

            $scope.filterSelected = function(filterItemKey) {
                filtersNames[$scope.currentFilterKey].value = filterItemKey;

                $timeout(function() {
                    $scope.showScroll = false;
                    $scope.selectedIndex = -1;
                }, 700);
            };

            $scope.clearFilter = function() {
                $scope.selectedIndex = -1;
                $scope.showScroll = false;
                angular.forEach(filtersNames, function(item, key) {
                    item.value = -1;
                });
            };

            $scope.itemClicked = function(index) {
                $scope.selectedIndex = index;
            };

            $scope.search = function() {
                var params = {
                    id: ''
                };
                angular.forEach(filtersNames, function(item, key) {
                    if (item.value != -1) {
                        params['id'] += '&' + item.name + item.value;
                    }
                });
                console.log(params);
                GuideSearchService.setSearchParams(params.id);
                $scope.showScroll = false;
            };
        }
    ]);