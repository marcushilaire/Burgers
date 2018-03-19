var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")
router.get("/", function(req, res){
    burger,all(function(data){
    })
    res.render("index", {cats:data})
});
router.get("/api", function(req, res){
    burger.all(function(data){
        res.json(data)
    }
)})
router.post("/api/burgers", function(req,res){
    burger.create(req.body.id, function(result){
    })
});
router.put("/api/burgers/:id", function(req,res){
    burger.update(req.body.id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});
router.delete("api/burgers:id", function(req,res){
    burger.delete(req.body.id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});
module.exports = router;