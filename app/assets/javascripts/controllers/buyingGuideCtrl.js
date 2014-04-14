angular.module('autoControllers')
.controller('BuyingGuideCtrl', ['$scope', '$location', '$timeout', 'GuideSearchService',
            function($scope, $location, $timeout, GuideSearchService) {
              $scope.currentFilterKey = -1;
              $scope.collection = [];
              $scope.selectedIndex = -1;
              $timeout(function() {
                $('.selectpicker').selectpicker('mobile');
              });

              $scope.selections = [0,0,0,0];

              var categoryCollection = [
                'כל הקטגוריות',
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
                'כל המחירים',
                'עד 95,000',
                '95,000 - 120,000',
                '120,000 - 140,000',
                '140,000 - 165,000',
                '165,000 - 210,000',
                '210,000 - 300,000',
                'מעל ל- 300,000'
              ];

              var countryCollection = [
                'כל הארצות',
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
                'כל המנועים',
                'עד 1.4 ליטר',
                '1.4 - 1.6 ליטר',
                '1.6 - 1.8 ליטר',
                '1.8 - 2.0 ליטר',
                '2.0 - 2.5 ליטר',
                '2.5 - 3.0',
                'מעל 3.0 ליטר'
              ];

              var filterNames = [
                {
                name: 'category',
                value: 0
              },
              {
                name: 'price_range',
                value: 0
              },
              {
                name: 'country',
                value: 0
              },
              {
                name: 'engine',
                value: 0
              }
              ];

              $scope.menus = [categoryCollection, priceRangeCollection, countryCollection, engineCapacityCollection];

              $scope.showFilter = function(navKey) {
                $scope.collection = dicCollections[navKey];
                $scope.currentFilterKey = navKey;
              };

              $scope.clearFilter = function() {
                $scope.selections = [0,0,0,0];
              };

              $scope.itemClicked = function(item, index, parentIndex) {
                $scope.selections[parentIndex] = index;
                //$(document).foundation('dropdown','close',$('#drop-' + parentIndex));
              };

              $scope.search = function() {
                var params = {};
                angular.forEach(filterNames, function(item, key) {
                    params[item.name] = $scope.selections[key];
                });
                console.log(params);
                GuideSearchService.setSearchParams(params);
                GuideSearchService.setLimit(30);
                $location.url('/guide/search');
              };
            }]);
