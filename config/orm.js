var connection = require("../config/connection.js")
var orm ={
    all: function(callback){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(queryString);
            callback(result)
        })
    },
    create: function(values, callback){
        var queryString = "INSERT INTO burgers (burgername)";
        queryString=+ "VALUES (" + values + ")"
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(queryString);
            callback(result)
        })
    },
    update: function(burgerId, callback){
        var queryString = "UPDATE burgers SET ? WHERE id = " + burgerId;
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