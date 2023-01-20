const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const path = require("path");

router.get("/new", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/addpost");
});
router.get("/:id", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  // console.log(req.params);
  Post.findById(req.params.id).then((post) => {
    res.render("site/post", { post: post.toJSON() });
  });
});

//!1-aşağıdaki body i app.js den kendi çekiyor,db deki veriyi okumak için
//!2-add.handlebars daki formun action bölümüne yazdığımz uzantı ile aşağıdaki uzanrı aynı olmak zorunda==>> /test
router.post("/test", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  // res.send("TEST OK");
  //   console.log(req.body)
  let post_image = req.files.post_image;
  post_image.mv(
    path.resolve(__dirname, "../public/img/postimages", post_image.name)
  );
  // Post.create(req.body)
  Post.create({
    ...req.body,
    post_image: `/img/postimages/${post_image.name}`,
  });
  // console.log(req.files.post_image.name);
  res.redirect("/");
});

module.exports = router;
