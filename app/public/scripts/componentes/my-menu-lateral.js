angular.module('appExpedientes')
  .component('menuLateral', {    
    bindings: {
       opcionesMenu:'<'
    },
    templateUrl:'templates/componentes/barra-lateral.html'
  })
  .component('grupoMenuLateral', {
    bindings: {
       titulo:'<',
       elementos:'<'
    },
    templateUrl:'templates/componentes/grupo-menu-lateral.html'
  })
  .component('opcionMenuLateral', {
    bindings: {
      titulo: '<',
      enlace:'<',
      activo:'<'
    },
    controller: ['expedientesService','$location',function (expedientesService,$location) {
          this.navegar = function () {
              console.log(this);
              $location.path(this.enlace);
              this.activo=true;
          };
      }],
    controllerAs: '$ctrl',
    templateUrl:'templates/componentes/opcion-menu-lateral.html'
  });