angular.module('autoServices')
.factory('SearchServices', ['$http',
         function($http) {
           var resource = {};

           resource.getSearchResaulForAllManufacturerModels = function(manufacturerId) {
             return $http.get('search?manufacturer=' + manufacturerId , {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           resource.getSearchResaulForModelByModelId = function(modelId) {
             return $http.get('models/' + modelId , {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           resource.getModelUsedByUsedID = function(modelId, usedId) {
             return $http.get('models/' + modelId + '/used/' + usedId, {
               headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             });
           };

           return resource;
         }
]);
