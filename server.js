var express =require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'); //type "mongod" as the cmd in cmd to start the mongodb.


var env =process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path){
    return stylus(str).set('filename', path);
}
//below is the configuration section.
app.set('views', __dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
    src: __dirname + '/public', 
    compile: compile 
    }    
))
app.use(express.static(__dirname + '/public'));

if(env === 'development'){
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect('mongodb://uintel:multivision@ds247688.mlab.com:47688/multivision');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open',function callback(){
    console.log('multivision db opened');
});

var messageSchema= mongoose.Schema({message: String});
var Message= mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage= messageDoc.message;
});

app.get('/partials/:partialPath',function(req,res){
    res.render('partials/'+req.params.partialPath);
});

app.get('*',function(req,res){
    res.render('index',{
        mongoMessage:mongoMessage
    });
});

var port= process.env.PORT || 3030;
app.listen(port);
console.log('Listening to the port '+port+'...');
