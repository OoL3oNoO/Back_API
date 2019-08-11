var mysql = require("mysql");

var dbConnect = mysql.createConnection({
  host: "bketdv3flolcnrqngjrc-mysql.services.clever-cloud.com",
  database: "bketdv3flolcnrqngjrc",
  user: "udgjktbakc9gyn35",
  password: "BkQJ6OFn433EZnHQwio6"
});

module.exports = dbConnect;