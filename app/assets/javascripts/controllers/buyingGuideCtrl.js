angular.module('autoControllers')
.controller('BuyingGuideCtrl', ['$scope', '$location', '$timeout', 'GuideSearchService',
            function($scope, $location, $timeout, GuideSearchService) {
              $scope.currentFilterKey = -1;
              $scope.collection = [];
              $scope.selectedIndex = -1;
              $timeout(function() {
                $(document).foundation();
              });

              $scope.navsData = [{
                title: 'בחר קטגוריה',
                value: -1
              }, {
                title: 'בחר טווח מחירים',
                value: -1
              }, {
                title: 'בחר ארץ מוצא',
                value: -1
              }, {
                title: 'בחר נפח מנוע',
                value: -1
              }];

              $scope.selections = angular.copy($scope.navsData);

              var categoryCollection = [
                'מיני / סופרמיני',
                'משפחתיות / קטנות',
                'משפחתיות / קומפקטיות',
                'משפחתיות גדולות / מנהלים',
                'סאלון',
                'מיניוואן (עד 6 מושבים)',
                'מיניוואן (7 מושבים ויותר)',
                'פנאי / שטח בנוני',
                'פנאי / שטח גדול',
                'פנאי / שטח יוקרה',
                'ספורטיביות',
                'קופה קבריולה',
                'טנדרים',
                'מסחריות קטנות',
                'היברידי',
                'מכוניות על'
              ];

              var priceRangeCollection = [
                'עד 95,000',
                '95,000 - 120,000',
                '120,000 - 140,000',
                '140,000 - 165,000',
                '165,000 - 210,000',
                '210,000 - 300,000',
                'מעל ל- 300,000'
              ];

              var countryCollection = [
                "יפן",
                'ארה"ב',
                "קוריאה",
                "גרמניה",
                "איטליה",
                "אנגליה",
                "צרפת",
                "ספרד",
                "שבדיה",
                "צ'כיה"
              ];

              var engineCapacityCollection = [
                'עד 1.4 ליטר',
                '1.4 - 1.6 ליטר',
                '1.6 - 1.8 ליטר',
                '1.8 - 2. 0 ליטר',
                '2.0  - 2.5 ליטר',
                '2.5 - 3.0',
                'מעל 3.0 ליטר'
              ];

              var filterNames = [
                {
                name: 'category=',
                value: -1
              },
              {
                name: 'price_range=',
                value: -1
              },
              {
                name: 'country=',
                value: -1
              },
              {
                name: 'engine=',
                value: -1
              }
              ];

              $scope.menus = [categoryCollection, priceRangeCollection, countryCollection, engineCapacityCollection];

              $scope.selectedMenuItems = function(index) {
                if (filterNames[index].value === -1) return navsData[index];
                return (menus[index][filterNames][index].value);
              };

              $scope.showFilter = function(navKey) {
                $scope.collection = dicCollections[navKey];
                $scope.currentFilterKey = navKey;
              };

              $scope.clearFilter = function() {
                $scope.selections = angular.copy($scope.navsData);
              };

              $scope.itemClicked = function(item, index, parentIndex) {
                $scope.selections[parentIndex].title = item;
                $scope.selections[parentIndex].value = index;
                $(document).foundation('dropdown','close',$('#drop-' + parentIndex));
              };

              $scope.search = function() {
                var params = '';
                angular.forEach(filterNames, function(item, key) {
                  if ($scope.selections[key].value !== -1) {
                    params += '&' + item.name + $scope.selections[key].value;
                  }
                });
                console.log(params);
                GuideSearchService.setSearchParams(params);
                $location.url('/guide/search');
              };
            }]);
