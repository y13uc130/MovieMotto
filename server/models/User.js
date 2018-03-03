var mongoose= require('mongoose'),
    teja =require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName : {type: String, required: '{PATH} is required!'},
    username : {
        type: String, 
        required: '{PATH} is required!',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required!'},
    hashed_pwd: {type: String, required: '{PATH} is required!'},
    roles:[String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch){
        return teja.hashPwd(this.salt, passwordToMatch)=== this.hashed_pwd;
    },
    hasRole : function(role){
        return this. roles.indexOf(role)> -1;
    }
}
var User= mongoose.model('User', userSchema);

function createDefaultUsers(){
    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            var salt, hash;
            salt = teja.createSalt();
            hash = teja.hashPwd(salt,'intel');
            User.create({firstName: 'Intel', lastName: 'Kancharla', username: 'intel', salt: salt, hashed_pwd: hash, roles: ['admin']});
            salt = teja.createSalt();
            hash = teja.hashPwd(salt,'suraj');
            User.create({firstName: 'Suraj', lastName: 'Vegesna', username: 'suraj', salt: salt, hashed_pwd: hash, roles:[]});
            salt = teja.createSalt();
            hash = teja.hashPwd(salt,'basam');
            User.create({firstName: 'Basam', lastName: 'Rahul', username: 'basam', salt: salt, hashed_pwd: hash, roles:[]});
            salt = teja.createSalt(); 
            hash = teja.hashPwd(salt,'haritha');
            User.create({firstName: 'Haritha', lastName: 'Polasanapalli',username:'haritha', salt: salt, hashed_pwd: hash});
        }
    })    
};

exports.createDefaultUsers= createDefaultUsers;
