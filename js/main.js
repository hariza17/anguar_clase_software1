var app = angular.module("app", ['ui.router']);

app.config(['$stateProvider',function ($stateProvider) {

        $stateProvider
            .state('main', {
                url: '/app',
                templateUrl: 'js/views/main.html',
            })

}]);



