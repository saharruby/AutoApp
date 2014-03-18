angular.module('autoControllers')
    .controller('CarModelCtrl', ['$scope', '$routeParams', '$sce', 'SearchServices', 'CatalogServices',
        function($scope, $routeParams, $sce, SearchServices, CatalogServices) {
            $scope.modelId = CatalogServices.getModelId();
            $scope.review = [];
            //$scope.newOrUsed = CatalogServices.getNewOrUsed();
            //console.log($scope.newOrUsed);
            console.log($routeParams);
            if ($routeParams.isSelected && $routeParams.id) {
                // if ($routeParams.usedId) {
                //     console.log("Route with usedID routeParams");
                //     SearchServices.getModelUsedByModelIdAndUsedId($routeParams.id, $routeParams.usedId).success(function(data) {
                //         setDataFromService(data);
                //     });
                // } else {

                //}
                // SearchServices.getModelUsedByModelIdAndUsedId
                // getDataFromService($routeParams.id);
                console.log("Route with -id- routeParams");
                SearchServices.getSearchResaulForModelByModelId($routeParams.id).success(function(data) {
                    setDataFromService(data);
                });
            } else if ($scope.modelId > 0) {
                // SearchServices.getSearchResaulForModelByModelId($scope.modelId + '?used=' + $scope.newOrUsed).success(function(data) {
                //getDataFromService($scope.modelId);
                console.log("Route with modelID from catalogService");
                SearchServices.getSearchResaulForModelByModelId($scope.modelId).success(function(data) {
                    setDataFromService(data);
                });
            }
            console.log($routeParams);

            function setDataFromService(data) {
                // SearchServices.getSearchResaulForModelByModelId(model_id).success(function(data) {
                $scope.model = data[0];

                $scope.review.push({
                    title: 'חוות דעת',
                    content: data[0].review.text
                });
                $scope.review.push({
                    title: 'עיצוב ונוכחות',
                    content: data[0].review.design
                });
                $scope.review.push({
                    title: 'תא נוסעים ומטען',
                    content: data[0].review.cabin
                });
                $scope.review.push({
                    title: 'מנוע וביצועים',
                    content: data[0].review.performance
                });
                $scope.review.push({
                    title: 'נוחות והתנהגות',
                    content: data[0].review.comfort
                });
                $scope.review.push({
                    title: 'תמורה למחיר',
                    content: data[0].review.valueForMoney
                });
                $scope.review.push({
                    title: 'סיכום',
                    content: data[0].review.summary
                });
                $scope.review.push({
                    title: 'יתרונות',
                    content: data[0].review.advantages
                });
                $scope.review.push({
                    title: 'חסרונות',
                    content: data[0].review.disadvantages
                });

                $scope.tableData = [{
                    title: 'חוות דעת מומחה',
                    link: '#/carcatalog/model/review?isSelected'
                }, {
                    title: 'גרסאות',
                    link: '#/carcatalog/model/versions/' + $scope.model.id + '?isSelected'
                }, {
                    title: 'תמונות גלריה',
                    link: '#/carcatalog/model/gallery?id=' + $scope.model.galleryId
                }, {
                    title: 'וידאו',
                    link: '#/carcatalog/model/videos?id=' + $scope.model.videoId
                }, {
                    title: 'מתחרים',
                    link: '#/carcatalog/model/competitors?id=' + $scope.model.competitorsId
                }, {
                    title: 'דגמי יד שניה',
                    link: '#/carcatalog/models/' + $scope.model.id + '/useds'
                }];

                console.log($scope.model);
                // });
            }
        }
    ]);