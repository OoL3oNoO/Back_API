// connection configurations
var mysql = require('mysql');
var dbConn = mysql.createConnection({
    // host: 'process.env.bketdv3flolcnrqngjrc-mysql.services.clever-cloud.com',
    // database: 'process.env.bketdv3flolcnrqngjrc',
    // contacts: 'process.env.udgjktbakc9gyn35',
    // password: 'process.env.BkQJ6OFn433EZnHQwio6'
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'mydb'
});
// connect to database
dbConn.connect();


module.exports= createConnection;