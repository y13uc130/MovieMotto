angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse){
    $scope.courses= mvCourse.query();

    //sortoptions list is an array with 2 objects in it, which is mentioned in course-list.jade
    $scope.sortOptions = [{value:"title", text:"Sort by Title"}, {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});