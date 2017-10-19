angular.module('dclfactorJS.lote', []);

angular.module('dclfactorJS.lote').config(function ($routerProvider) {
    $routerProvider.when('/form/lote/', {
        controller: 'LoteController',
        templateUrl: 'static/view/lote-form.html'
    });
});