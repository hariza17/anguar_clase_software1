

var app = angular.module("app", ['ui.router','ui.bootstrap']);



app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/app');


    $stateProvider
        .state('main', {
            url: '/app',
            templateUrl: 'js/views/main.html'
        });

    $stateProvider
        .state('main.home', {
            url: '/home',
            templateUrl: 'js/views/home.html'

        });
    $stateProvider
        .state('main.profile', {
            url: '/profile',
            templateUrl: 'js/views/profile.html'

        });

    $stateProvider
        .state('main.messages', {
            url: '/messages',
            templateUrl: 'js/views/messages.html'

        });

});



