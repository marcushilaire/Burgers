var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgersDB"
});
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }    console.log("DB running: " + connection.threadId)
})
module.exports = connection;