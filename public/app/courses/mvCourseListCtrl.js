angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourse){
    $scope.courses= mvCachedCourse.query();

    //interface of this is exacly the same as the resource. so that it makes it easy to use this service instead of resource service.
    //also, for controllers, can use this if cached data is needed. and controllers can use resource service if we need updated data
    //sortoptions list is an array with 2 objects in it, which is mentioned in course-list.jade
    $scope.sortOptions = [{value:"title", text:"Sort by Title"}, {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});