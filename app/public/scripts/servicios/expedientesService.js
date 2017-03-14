angular.module('appExpedientes').factory('expedientesService', 
['$http','$q',function($http,$q){ 
        var _expedienteActual={};       
        var _crearExpediente = function(nuevoExpediente){
            var deffered = $q.defer();
            $http.post("http://localhost:3000/api/expediente/",nuevoExpediente).success(function(data, status, headers, config) {
                deffered.resolve(data);
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
        var _buscarTodos = function(){
            
            var deffered = $q.defer();
            $http.get("http://localhost:3000/api/expediente/").success(function(data, status, headers, config) {
                deffered.resolve(data);
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
         var _actualizar = function(actuExpediente){
            var deffered = $q.defer();
            $http.put("http://localhost:3000/api/expediente/"+actuExpediente._id,actuExpediente).success(function(data, status, headers, config) {
                deffered.resolve(data);
                _expedienteActual={};
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
         var _borrar = function(id){
            var deffered = $q.defer();
            $http.delete("http://localhost:3000/api/expediente/"+id).success(function(data, status, headers, config) {
                deffered.resolve("expediente borrado");
                _expedienteActual={};
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
        return {              
            buscarExpediente: function(text){
                console.log("Buscando expediente "+text);
            },
            buscarTodos : _buscarTodos,
            crearExpediente : _crearExpediente,
            actualizarExpediente : _actualizar,
            borrarExpediente : _borrar,
            setExpedienteActual : function(e){
                _expedienteActual=e;
            },
            getExpedienteActual :function(){
                return _expedienteActual;
            } 
        };        
}]);