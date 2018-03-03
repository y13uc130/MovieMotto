angular.module('app').factory('mvCachedCourse', function(mvCourse){
    var courseList;
    
    return {
        query: function(){
            if(!courseList){
                courseList= mvCourse.query();
            }
            return courseList;
        }
    }
})