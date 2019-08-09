// connection configurations
var mysql = require('mysql');
var dbConnect = mysql.createConnection({
    host: 'process.env.bketdv3flolcnrqngjrc-mysql.services.clever-cloud.com',
    database: 'process.env.bketdv3flolcnrqngjrc',
    contacts: 'process.env.udgjktbakc9gyn35',
    password: 'process.env.BkQJ6OFn433EZnHQwio6'
    // host: 'localhost',
    // port: '3306',
    // user: 'root',
    // password: '',
    // database: 'mydb'
});
dbConnect.connect(function(err){
    if(err){
      console.log(err);
    } else {
      console.log("no errors");
    }
  });
module.exports= dbConnect;