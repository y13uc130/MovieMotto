angular.module('app').controller('mvMainCtrl',function($scope, mvIdentity, mvCourse){
    $scope.identity=mvIdentity;
    $scope.courses = mvCourse.query();
});
