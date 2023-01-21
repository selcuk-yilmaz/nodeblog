const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//! app yazan yerleri router ile değiştirdik.
router.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/index.html"))
  console.log(req.session);
  res.render("site/index");
});

router.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/about");
});
//! HTML'e databaseden veri gönderiyoruz. HTML'de karşılanacak
router.get("/blog", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  //  res.render("site/blog");
  Post.find({}).lean().then((posts) => {
    res.render("site/blog", { posts: posts });
  });
});

router.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/contact");
});

//!aşağıyı users ın içine taşıduık
// router.get("/login", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/login");
// });

//!aşağıyı users ın içine taşıduık
// router.get("/register", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/register");
// });

module.exports = router;
