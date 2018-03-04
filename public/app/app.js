angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    var routeRoleChecks = {
        admin :{
            auth: function(mvAuth){
            return mvAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function(mvAuth){
            return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    }
    $routeProvider
        .when('/',{templateUrl: 'partials/main/main',controller: 'mvMainCtrl'})
        .when('/admin/users',{ 
            templateUrl: 'partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve : routeRoleChecks.admin
        })
        .when('/signup', {templateUrl: 'partials/account/signup', controller: 'mvSignupCtrl'})
        .when('/profile', { templateUrl:'partials/account/profile', controller: 'mvProfileCtrl', resolve: routeRoleChecks.user })
        .when('/courses', { templateUrl:'partials/courses/course-list', controller: 'mvCourseListCtrl'})
        .when('/courses/:id', { templateUrl:'partials/courses/course-details', controller: 'mvCourseDetailCtrl'});
});


angular.module('app').run(function($rootScope, $location,){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection ==='not authorized'){
            $location.path('/');
        }
    })
} )

//unlike with jade, with html, routing is simple.
//for jade file, we need to have jade templating engine.
