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
    // console.log(req.body.name)
});
router.put("/api/burgers/:id", function(req,res){
    burger.update(req.body.devourered, req.params.id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
    console.log(req.params)
    console.log(req.body.name)
});
router.delete("/api/burgers/:id", function(req,res){
    // burger.delete(req.params.id, function(result){
    // res.status(200).end();
    // })
    console.log(req.params.id)
    console.log(req.body)
});
module.exports = router;