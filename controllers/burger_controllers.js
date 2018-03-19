var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3606,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgersDB"
});
connection.connect(function(err){
    if (err) throw err;
    console.log("DB running: " + connection.threadId)
})