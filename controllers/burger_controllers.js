var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")
router.get("/", function(req, res){
    burger.all(function(data){
        var object = {
            burgers:data
        };
    res.render("index", object)
    })
});
router.get("/api", function(req, res){
    burger.all(function(data){
        res.json(data)
    }
)})
router.post("/api/burgers", function(req,res){
    burger.create(req.body.name, function(result){
    })
    res.end();
});
router.put("/api/burgers/:id", function(req,res){
    burger.update(req.body.devourered, req.params.id, function(result){
// res.redirect("/")
    })
    res.end();
});
router.delete("/api/burgers/:id", function(req,res){
    burger.delete(req.params.id, function(result){
    // res.status(200).end();
    })
    res.end();

});
module.exports = router;