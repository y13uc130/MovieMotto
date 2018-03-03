//this controller handles all logics for routes about the users
var User= require('mongoose').model('User'),
    teja = require('../utilities/encryption');

exports.getUsers = function(req,res){
    User.find({}).exec(function(err, collection){
        res.send(collection);
    })
}
//creating the handler for new users.

exports.createUser =function(req,res,next){
    var userData= req.body;  //grabbing the data that was posted to the users ('/api/users').
    userData.username =userData.username.toLowerCase();
    userData.salt= teja.createSalt();
    userData.hashed_pwd= teja.hashPwd(userData.salt, userData.password);
    User.create(userData, function(err, user){
        if(err){
            if(err.toString().indexOf('E11000')> -1){
                err = new Error('Duplicate Username.');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
        req.logIn(user, function(err){
            if(err) {return next(err);}
            res.send(user);
        })//server side functionality has been done.
    })
};

exports.updateUser =function(req, res){
    var userUpdates= req.body;

    if(req.user._id!= userUpdates._id && req.user.hasRole('admin')){
        res.status(403);
        return res.end();
    }

    req.user.firstName=userUpdates.firstName;
    req.user.lastName=userUpdates.lastName;
    req.user.username=userUpdates.username;
    if(userUpdates.password && userUpdates.password.length()>0){
        req.user.salt= teja.createSalt();
        req.user.hashed_pwd= teja.hashPwd(req.user.salt, userUpdates.password);
    }//now that current user is updated, we'll save that to the database using mongoose.
    req.user.save(function(err){
        if(err){res.status(400); return res.send({reason:err.toString()});}
        res.send(req.user);
    });
};
