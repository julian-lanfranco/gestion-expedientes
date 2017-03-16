
angular.module('appExpedientes').controller('ABMAreasCtrl',
 ['$scope','$location','$routeParams','areasService',
    function($scope,$location,$routeParams,areasService){

            var iniciar = function(){
                console.log($routeParams);
                console.log($routeParams.idarea);
                $scope.operacionError =false;	
			    $scope.operacionExitosa = false;	
                if(angular.isUndefined($routeParams.idarea) || $routeParams.idarea === null ){
                    $scope.modoEditar = false;
                }else{
                    $scope.modoEditar = true;
                    var  tmpArea= areasService.getAreaActual();
                    console.log(tmpArea);
                    //tmpExpediente.fecha=new Date(tmpExpediente.fecha);
                    $scope.area = tmpArea;
                };
            }

            $scope.crear = function(){
				console.log($scope.area);

                areasService.crearArea($scope.area)
                .then(function(){
                	$scope.operacionExitosa = true;	
					$scope.operacionError = false;	
                },function(err){
                	console.log(err);
					$scope.operacionExitosa = false;	
					$scope.operacionError = true;	
                });
                            
            };

            $scope.buscarAreas = function(){
                //alert("buscando");
                areasService.buscarTodos().then(
                    function (data){

                        $scope.areas = data;

                        alert(JSON.stringify(data));                       
                    }
                );
            };


            $scope.actualizar = function(){
                console.log($scope.area);
                areasService.actualizarArea($scope.area)
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
                console.log($scope.area);
                areasService.borrarArea($scope.area._id)
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
                $scope.area ={};
                $scope.operacionError =false;   
                $scope.operacionExitosa = false;    
                $location.path("home");

            };

            // cuando termina de cargar el controller lo inicia
            iniciar();
            $scope.buscarAreas();

        }
    ]
);