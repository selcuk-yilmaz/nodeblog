const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const path = require("path")
const Category = require("../models/Category");
const User = require("../models/User");
router.get("/new", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  if (!req.session.userId) {
    res.redirect("/users/login");
  }
  Category.find({})
    .lean()
    .then((categories) => {
      res.render("site/addpost", { categories: categories });
    });
});

router.get("/:id", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  // console.log(req.params);
  Post.findById(req.params.id)
    .populate({ path: "author", model: User })
    .then((post) => {
      Category.find({})
        .lean()
        .then((categories) => {
          res.render("site/post", {
            post: post.toJSON(),
            categories: categories,
          });
        });
    });
});

//!1-aşağıdaki body i app.js den kendi çekiyor,db deki veriyi okumak için
//!2-add.handlebarsdaki formun action bölümüne yazdığımz uzantı ile aşağıdaki uzantı aynı olmak zorunda==>> /test
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
    author: req.session.userId,
  });
  req.session.sessionFlash = {
    type: "alert alert-success",
    message: "Your post was created successfully",
  };
  // console.log(req.files.post_image.name);
  res.redirect("/blog");
});

module.exports = router;
