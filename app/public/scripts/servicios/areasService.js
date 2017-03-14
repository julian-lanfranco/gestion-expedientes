angular.module('appExpedientes').factory('areasService', 
['$http','$q',function($http,$q){ 
        var _areaActual={};       
        var _crearArea = function(nuevoArea){
            var deffered = $q.defer();
            $http.post("http://localhost:3000/api/area/",nuevoArea).success(function(data, status, headers, config) {
                deffered.resolve(data);
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
        var _buscarTodos = function(){
            var deffered = $q.defer();
            $http.get("http://localhost:3000/api/area/").success(function(data, status, headers, config) {
                deffered.resolve(data);
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
         var _actualizar = function(actuArea){
         
            var deffered = $q.defer();
            $http.put("http://localhost:3000/api/area/"+actuArea._id,actuArea).success(function(data, status, headers, config) {
                deffered.resolve(data);
                _areaActual={};
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
         var _borrar = function(id){
            var deffered = $q.defer();
            $http.delete("http://localhost:3000/api/area/"+id).success(function(data, status, headers, config) {
                deffered.resolve("area borrada");
                _areaActual={};
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
        return {              
            buscarArea: function(text){
                console.log("Buscando area "+text);
            },
            buscarTodos : _buscarTodos,
            crearArea : _crearArea,
            actualizarArea : _actualizar,
            borrarArea : _borrar,
            setAreaActual : function(e){
                _areaActual=e;
            },
            getAreaActual :function(){
                return _areaActual;
            } 
        };        
}]);