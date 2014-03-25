angular.module('autoControllers')
    .controller('ModelVersionDetailsCtrl', ['$scope', '$routeParams', 'VersionsServices', 'CatalogServices',
        function($scope, $routeParams, VersionsServices, CatalogServices) {
            var model_id = $routeParams.modelId;
            var version_id = $routeParams.versionId;
            $scope.showContent = false;

            console.log($routeParams);
            VersionsServices.getModelVersionDetailsByModelIDAndVersionID(model_id, version_id).success(function(data) {
                console.log(data);
                $scope.versionDetails = {};
                $scope.title = data[0].name;
                $scope.allTitles = [
                    'תיאור',
                    'מידות',
                    'מתלים ובלמים',
                    'ביצועים',
                    'מנוע',
                    'צריכת דלק (יצרן)',
                    'בטיחות',
                    'מבחני ריסוק (חדשים)',
                    'איבזור'
                ];

                $scope.versionDetails[$scope.allTitles[8]] = {};
                $scope.versionDetails[$scope.allTitles[8]].key = $scope.allTitles[8];
                $scope.versionDetails[$scope.allTitles[8]].items = [];
                arr = data[0].equipment.split(',');
                angular.forEach(arr, function(item, key) {
                    $scope.versionDetails[$scope.allTitles[8]].items.push({
                        title: item,
                        value: true
                    });
                });

                $scope.versionDetails[$scope.allTitles[7]] = {};
                $scope.versionDetails[$scope.allTitles[7]].key = $scope.allTitles[7];
                $scope.versionDetails[$scope.allTitles[7]].items = [{
                    title: 'ציון כללי:',
                    value: data[0].fuelConsumption.score
                }, {
                    title: 'מבוגרים:',
                    value: data[0].fuelConsumption.adults
                }, {
                    title: 'ילדים:',
                    value: data[0].fuelConsumption.children
                }, {
                    title: 'הולכי רגל:',
                    value: data[0].fuelConsumption.pedestrians
                }];

                $scope.versionDetails[$scope.allTitles[6]] = {};
                $scope.versionDetails[$scope.allTitles[6]].key = $scope.allTitles[6];
                $scope.versionDetails[$scope.allTitles[6]].items = [];
                var arr = data[0].safety.split(',');
                angular.forEach(arr, function(item, key) {
                    $scope.versionDetails[$scope.allTitles[6]].items.push({
                        title: item,
                        value: true
                    });
                });

                $scope.versionDetails[$scope.allTitles[5]] = {};
                $scope.versionDetails[$scope.allTitles[5]].key = $scope.allTitles[5];
                $scope.versionDetails[$scope.allTitles[5]].items = [{
                    title: 'ביהעירוני:',
                    value: data[0].fuelConsumption.longDistance
                }, {
                    title: 'עירוני:',
                    value: data[0].fuelConsumption.urban
                }, {
                    title: 'ממוצע:',
                    value: data[0].fuelConsumption.Average
                }, {
                    title: 'דרגת זיהום אוויר:',
                    value: data[0].fuelConsumption.degreeOfPollution
                }];

                $scope.versionDetails[$scope.allTitles[4]] = {};
                $scope.versionDetails[$scope.allTitles[4]].key = $scope.allTitles[4];
                $scope.versionDetails[$scope.allTitles[4]].items = [{
                    title: 'סוג מנוע:',
                    value: data[0].engine.engineType
                }, {
                    title: 'נפח מנוע:',
                    value: data[0].engine.engineCapacity
                }, {
                    title: 'תצורה:',
                    value: data[0].engine.configuration
                }, {
                    title: 'תזמון:',
                    value: data[0].engine.timing
                }, {
                    title: 'כ"ס \\ סל"ד:',
                    value: data[0].engine.hp2rpm
                }, {
                    title: 'מומנט \\ סל"ד:',
                    value: data[0].engine.torque2rpm
                }, {
                    title: 'הנעה:',
                    value: data[0].engine.propulsion
                }, {
                    title: 'תיבת הילוכים:',
                    value: data[0].engine.gearbox
                }];

                $scope.versionDetails[$scope.allTitles[3]] = {};
                $scope.versionDetails[$scope.allTitles[3]].key = $scope.allTitles[3];
                $scope.versionDetails[$scope.allTitles[3]].items = [{
                    title: '0 ל- 100 קמ"ש:',
                    value: data[0].performance.zeroTo100
                }, {
                    title: 'מהירות מרבית:',
                    value: data[0].performance.maxSpeed
                }];


                $scope.versionDetails[$scope.allTitles[2]] = {};
                $scope.versionDetails[$scope.allTitles[2]].key = $scope.allTitles[2];
                $scope.versionDetails[$scope.allTitles[2]].items = [{
                    title: 'מתלים קדמיים:',
                    value: data[0].suspensionBrakes.FrontSuspension
                }, {
                    title: 'מתלים אחוריים:',
                    value: data[0].suspensionBrakes.RearSuspension
                }, {
                    title: 'בלמים קדמיים:',
                    value: data[0].suspensionBrakes.FrontBrakes
                }, {
                    title: 'בלמים אחוריים:',
                    value: data[0].suspensionBrakes.RearBrakes
                }, {
                    title: 'תגבור הגה:',
                    value: data[0].suspensionBrakes.steeringWheelReinforcement
                }];

                $scope.versionDetails[$scope.allTitles[1]] = {};
                $scope.versionDetails[$scope.allTitles[1]].key = $scope.allTitles[1];
                $scope.versionDetails[$scope.allTitles[1]].items = [{
                    title: 'אורך:',
                    value: data[0].dimensions.length
                }, {
                    title: 'רוחב:',
                    value: data[0].dimensions.width
                }, {
                    title: 'גובה:',
                    value: data[0].dimensions.height
                }, {
                    title: 'משקל:',
                    value: data[0].dimensions.weight
                }, {
                    title: 'בסיס גלגלים:',
                    value: data[0].dimensions.wheelBase
                }, {
                    title: 'קוטר סיבוב:',
                    value: data[0].dimensions.turnDiameter
                }, {
                    title: 'נפח תא מטען:',
                    value: data[0].dimensions.trunkVolume
                }, {
                    title: 'צמיגים קדמיים:',
                    value: data[0].dimensions.frontTires
                }, {
                    title: 'צמיגים אחוריים:',
                    value: data[0].dimensions.rearTires
                }, {
                    title: 'נפח תא דלק:',
                    value: data[0].dimensions.fuelTankCapacity
                }];

                $scope.versionDetails[$scope.allTitles[0]] = {};
                $scope.versionDetails[$scope.allTitles[0]].key = $scope.allTitles[0];
                $scope.versionDetails[$scope.allTitles[0]].items = [{
                    title: 'מחיר:',
                    value: data[0].price
                }, {
                    title: 'אחריות:',
                    value: data[0].warranty
                }, {
                    title: 'קבוצה:',
                    value: data[0].category
                }, {
                    title: 'מרכב:',
                    value: data[0].chassis
                }, {
                    title: 'קבוצת רישוי:',
                    value: data[0].licensingGroup
                }, {
                    title: 'מקומות ישיבה:',
                    value: data[0].seats
                }, {
                    title: 'מקומות ישיבה:',
                    value: data[0].seats
                }, {
                    title: 'כריות אוויר:',
                    value: data[0].airbags
                }, {
                    title: 'ציון בטיוחות מבוגרים:',
                    value: data[0].crashTestOld.adults
                }, {
                    title: 'ציון בטיוחות ילדים:',
                    value: data[0].crashTestOld.children
                }];

                $scope.showContent = true;
            });
        }
    ]);