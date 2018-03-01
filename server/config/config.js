var path= require('path');
var rootPath= path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://uintel:multivision@ds247688.mlab.com:47688/multivision',
        port: process.env.PORT || 80
    }
}