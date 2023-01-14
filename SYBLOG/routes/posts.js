const express = require("express");
const router = express.Router();
const Post = require('../models/Post')

router.get("/new", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/addpost");
});
router.post("/test", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  // res.send("TEST OK");
  console.log(req.body)
  Post.create(req.body)
  res.redirect("/");
});

module.exports = router;
