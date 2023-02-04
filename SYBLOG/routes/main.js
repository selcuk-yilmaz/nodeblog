const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Category = require("../models/Category");
const User = require("../models/User");
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
  //!pagination için
  const postPerPage = 1;
  const page = req.query.page || 2;

  //---------------------------
  Post.find({})
    .populate({ path: "author", model: User })
    .sort({ $natural: -1 })
    .lean()
    //!pagination için
    .skip(postPerPage * page - postPerPage)
    .limit(postPerPage)
    //----------------------------
    .then((posts) => {
      Post.countDocuments().then(postCount =>{
        //! Category.find arasına aşağıdaki girdiyi yapıyruz.çünkü category sayılarını dinamik hale getirmek için
        Category.aggregate([
          {
            $lookup: {
              from: "posts",
              localField: "_id",
              foreignField: "category",
              as: "posts",
            },
          },
          {
            $project: {
              _id: 1,
              name: 1,
              num_of_posts: { $size: "$posts" },
            },
          },
        ])
          //! find ve lean a gerek kalmadı
          //  .find({})
          // .lean()
          .then((categories) => {
            res.render("site/blog", {
              posts: posts,
              categories: categories,
              current: parseInt(page),
              pages: Math.ceil(postCount / postPerPage),
            });
          });
      })
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
