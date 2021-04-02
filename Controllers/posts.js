const express = require("express");
const router = express.Router();
const Post = require("../Post");

//ROUTES

router.get("/", (req, res) => {
  res.send("POSTS, AH YEH!");
});

router.get("/weight", (req, res) => {
  res.send("190lb");
});

router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post.save().then(
    data => {
      res.json(data)
    }
  ).catch(err=>{
    res.status(200)
  });

  
});

module.exports = router;
