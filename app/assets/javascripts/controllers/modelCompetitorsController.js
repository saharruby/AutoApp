angular.module('autoControllers')
    .controller('ModelCompetitorsCtrl', ['$scope', '$routeParams', 'ModelCompetitorsServices',
        function($scope, $routeParams, ModelCompetitorsServices) {
            if ($routeParams.id) {
                ModelCompetitorsServices.getAllModelCompetitorsByCompetitorId($routeParams.id).success(function(data) {
                    $scope.competitors = data;
                });
            }
        }
    ]);