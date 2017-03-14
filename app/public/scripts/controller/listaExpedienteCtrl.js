angular.module('appExpedientes').controller('ListaExpedientesCtrl',
 ['$scope','$location','expedientesService',function($scope,$location,expedientesService){
            $scope.buscar = function(){
            	console.log("buscar!!!!");
                expedientesService.buscarTodos().then(
                	function (data){
                		$scope.lista = data;	
                	}
                );
            };
            $scope.editar = function(expe){
                expedientesService.setExpedienteActual(expe);
                $location.path('/expediente/abm/'+expe._id);
            };
            
            $scope.buscar();
        }
    ]
);