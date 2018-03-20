var connection = require("../config/connection.js")
var orm ={
    all: function(callback){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            // console.log(queryString);
            callback(result)
        })
    },
    create: function(burgerName, callback){
        // var queryString = "INSERT INTO burgers (burgerName, devourered) ";
        // queryString += "VALUES ("+ burgerName +", false);"
        var queryString = "INSERT INTO burgers (burgerName) VALUES ('" + burgerName + "')"
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) throw err;
            callback(result)
        })
    },
    update: function(status, burgerId, callback){
        var queryString = "UPDATE burgers SET devourered = "+ status + " WHERE id = " + burgerId;
        console.log(queryString)
        connection.query(queryString,function(err, result){
            if(err) throw err;
            console.log(queryString);
            callback(result)
        })
    },
    delete: function(burgerId, callback){
        var queryString = "DELETE FROM burgers WHERE id = " + burgerId;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(queryString);
            callback(result)
        })
    }
}
module.exports = orm