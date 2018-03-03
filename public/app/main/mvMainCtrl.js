angular.module('app').controller('mvMainCtrl',function($scope, mvIdentity, mvCachedCourse){
    $scope.identity=mvIdentity;
    $scope.courses = mvCachedCourse.query();
});
