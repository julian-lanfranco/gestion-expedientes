angular.module('appExpedientes', ['ngRoute','ui.bootstrap'])
	.constant('URL_EXPEDIENTES','http://localhost:3000/api/expedientes')
	.constant('URL_AREAS','http://localhost:3000/api/areas')
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			controller : 'expedientesController',
			templateUrl : 'templates/dashboard/panel.html'
		}).when('/expediente/abm', {
			controller : 'ABMExpedientesCtrl',
			templateUrl : 'templates/expediente/abm.html'
		}).when('/area/abm', {
			controller : 'ABMAreasCtrl',
			templateUrl : 'templates/area/abm.html'
		}).when('/expediente/abm/:idexpediente', {
			controller : 'ABMExpedientesCtrl',
			templateUrl : 'templates/expediente/abm.html'
		}).when('/area/abm/:idarea', {
			controller : 'ABMAreasCtrl',
			templateUrl : 'templates/area/abm.html'
		}).when('/expediente/lista', {
			controller : 'ListaExpedientesCtrl',
			templateUrl : 'templates/expediente/lista.html'
		}).when('/area/lista', {
			controller : 'ListaAreaCtrl',
			templateUrl : 'templates/area/lista.html'
		}).otherwise({
				redirectTo: "/home"
		});
	});