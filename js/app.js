var demoApp = angular.module('demoApp', ['ui.router', 'ui.bootstrap']);

demoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ======================================== 
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('domino', {
            url: '/domino',
            templateUrl: 'templates/domino.html'  
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('gpacalc', {
            url: '/gpacalc',
            templateUrl: 'templates/gpacalc.html'  
        });
});