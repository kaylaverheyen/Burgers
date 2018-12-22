// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();


var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "fsq6vr9trolsjvu8",
        password: "z22x6lnm1l5498om",
        database: "heroku_l8yvd3f9pvpdmz6v"
    });

    // Make connection.
    connection.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });

    // Export connection for our ORM to use.
    module.exports = connection
};