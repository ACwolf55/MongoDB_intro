const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

//ROUTES

// router.get("/", (req, res) => {
//   res.send("POSTS, AH YEH!");
// });

router.get("/weight", (req, res) => {
  res.send("190lb");
});

router.get("/pullups", (req, res) => {
  res.send("17");
});

router.post("/", async (req, res) => {
  
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    console.log(savedPost);
  } catch (err) {
    res.json({ message: err });
  }

  // post.save().then(
  //   data => {
  //     res.json(data)
  //   }
  // ).catch(err=>{
  //   res.status(200)
  // });
});

router.get('/', async(req,res)=>{
  try{
    const allPosts = await Post.find()
    res.json(allPosts)
  }catch(err){
    res.json({message:err})
  }
  

})

module.exports = router;
