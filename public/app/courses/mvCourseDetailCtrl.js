angular.module('app').controller('mvCourseDetailCtrl', function($scope,$routeParams, mvCourse){
    $scope.course =mvCourse.get({_id:$routeParams.id})
});