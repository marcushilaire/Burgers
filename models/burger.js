var orm = require("../config/orm.js");
var burger = {
    all: function(callback){
        orm.all(function(res){
            callback(res)
        })
    },
    create: function(values, callback){
        orm.create(values, function(res){
            callback(res)
        })
    },
    update: function(status, burgerId, callback){
        orm.update(status, burgerId, function(res){
            callback(res)
        })
    },
    delete: function(burgerId, callback){
        orm.delete(burgerId, function(res){
            callback(res)
        });
    }

};
module.exports = burger;