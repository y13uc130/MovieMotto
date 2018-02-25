angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{templateUrl: '/partials/main',controller: 'mainCtrl'})
});

angular.module('app').controller('mainCtrl',function($scope){
    $scope.myVar = "Hello Angular";
});

//unlike with jade, with html, routing is simple.
//for jade file, we need to have jade templating engine.
