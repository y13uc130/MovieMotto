//this controller needs a new model.
var Course= require('mongoose').model('Course');

exports.getCourses= function(req, res){
    Course.find({}).exec(function(err,collection){
        res.send(collection);
    })
};

//now that the controller is done, we should create that model. And afterthat, add this controller to routes.
