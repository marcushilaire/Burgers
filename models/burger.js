var orm = require("../config/orm.js");
var burger = {
    all: function(callback){
        orm.all(function(res){
            callback(res)
        })
    },
    create: function(values, callback){
        orm.create(function(res){
            callback(res)
        })
    },
    update: function(burgerId, callback){
        orm.update(function(res){
            callback(res)
        })
    },
    delete: function(burgerId, callback){
        orm.delete(function(res){
            callback(res)
        })
    }

}
module.exports = burger;