angular.module('appExpedientes')
  .component('myNav', {
    bindings: {
      nombreProyecto: '@',
      listaOpciones:'<',
      busqueda:'<'
    },
    controller: ['expedientesService','$location',function (expedientesService,$location) {
          this.navegar = function (url) {
              $location.path(url);
          };
          this.buscarExpediente = function () {
              expedientesService.buscarExpediente(this.busqueda);
          };
      }],
    controllerAs: '$ctrl',
    templateUrl:'templates/componentes/my-nav.html'
  });