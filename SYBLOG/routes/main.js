const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Category = require("../models/Category");
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
//!routes a taşıyoruz partial olsun diye
// router.get("/admin", (req, res) => {
//   res.render("site-admin/index");
// });
//! HTML'e databaseden veri gönderiyoruz. HTML'de karşılanacak
router.get("/blog", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  //  res.render("site/blog");
  Post.find({})
    .sort({ $natural: -1 })
    .lean()
    .then((posts) => {
      Category.find({})
        .lean()
        .then((categories) => {
          res.render("site/blog", { posts: posts, categories: categories });
        });
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
