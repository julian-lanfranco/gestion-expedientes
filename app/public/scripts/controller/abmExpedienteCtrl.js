angular.module('appExpedientes').controller('ABMExpedientesCtrl',
 ['$scope','$location','$routeParams','expedientesService','areasService',
    function($scope,$location,$routeParams,expedientesService,areasService){
			

            
            var iniciar = function(){

                                
               
                console.log($routeParams);
                console.log($routeParams.idexpediente);
                $scope.operacionError =false;
			    $scope.operacionExitosa = false;	
                if(angular.isUndefined($routeParams.idexpediente) || $routeParams.idexpediente === null ){
                    $scope.modoEditar = false;
                }else{
                    $scope.modoEditar = true;
                    var  tmpExpediente= expedientesService.getExpedienteActual();
                    console.log(tmpExpediente);
                    tmpExpediente.fecha=new Date(tmpExpediente.fecha);
                    $scope.expediente = tmpExpediente;
                };
           
            }
          


            $scope.crear = function(){
				console.log($scope.expediente);
                
                expedientesService.crearExpediente($scope.expediente)
                .then(function(){
                	$scope.operacionExitosa = true;	
					$scope.operacionError = false;	
                },function(err){
                	console.log(err);
					$scope.operacionExitosa = false;	
					$scope.operacionError = true;	
                }); 
                            
            };

         $scope.buscarIniciadores = function(){
                //alert("buscando");
                areasService.buscarTodos().then(
                    function (data){
                        $scope.iniciadores = data;

                        //alert(JSON.stringify(data));                       
                    }
                );
            };

            $scope.actualizar = function(){
                console.log($scope.expediente);
                expedientesService.actualizarExpediente($scope.expediente)
                .then(
                    function(){
                        $scope.operacionExitosa = true; 
                        $scope.operacionError = false; 
                    },function(err){
                        console.log(err);
                        $scope.operacionExitosa = false;    
                        $scope.operacionError = true;  
                    }
                );                
            };

            $scope.borrar = function(){
                console.log($scope.expediente);
                expedientesService.borrarExpediente($scope.expediente._id)
                .then(function(){
                    $scope.operacionExitosa = true; 
                    $scope.operacionError = false; 
                },function(err){
                    console.log(err);
                    $scope.operacionExitosa = false;    
                    $scope.operacionError = true;  
                });                
            };

            $scope.cancelar = function(){
                $scope.expediente ={};
                $scope.operacionError =false;   
                $scope.operacionExitosa = false;    
                $location.path("home");
            };

            // cuando termina de cargar el controller lo inicia
            iniciar();
            $scope.buscarIniciadores();
   


        }
    ]
);