var app = angular.module("app", ['ui.router']);

app.config(['$stateProvider',function ($stateProvider) {

        $stateProvider
            .state('main', {
                url: '/app',
                templateUrl: '<div>Menu</div>',
            })

}]);



