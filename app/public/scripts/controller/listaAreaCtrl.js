angular.module('appExpedientes').controller('ListaAreaCtrl',
 ['$scope','$location','areasService',function($scope,$location,areasService){
            $scope.buscar = function(){
            	console.log("buscar!!!!");
                areasService.buscarTodos().then(
                	function (data){
                		$scope.lista = data;                         
                	}
                );
            };
            $scope.editar = function(area){
                areasService.setAreaActual(area);
                $location.path('/area/abm/'+area._id);
            };
            
            $scope.buscar();
        }
    ]
);