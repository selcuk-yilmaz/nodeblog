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
//-----------------------------------------------------------------------
//!aşağısı search bölümüne aittir.
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/search", (req, res)=> {
    if (req.query.look) {
       const regex = new RegExp(escapeRegex(req.query.look), 'gi');
       Post.find({ title: regex })
         .lean()
         .populate({ path: "author", model: User })
         .sort({ $natural: -1 })
         .then((posts) => {
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
           ]).then((categories) => {
             res.render("site/blog", {
               posts: posts,
               categories: categories,
             });
           });
         }); 
    }
})
//-----------------------------------------------------------------------
//!Aşağısı blog sayfasında bulunan sidebardaki categorilere tıklayınca sadece ilgili kategorye gitmek için;
router.get('/category/:categoryId',(req,res)=>{
  Post.find({ category: req.params.categoryId })
    .lean()
    .populate({ path: "author", model: User })
    .then((posts) => {
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
      ]).then((categories) => {
        res.render("site/blog", { posts: posts, categories: categories });
      });
    });
})
//--------------------------------------------------------------------
router.get("/:id", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  // console.log(req.params);
  Post.findById(req.params.id)
    .populate({ path: "author", model: User })
    .then((post) => {
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
          //!daha önce 1 tane post gönderdin satır 22 de şimdi sidebar tümiçin tüm postları göndermen gerekiyor.
          Post.find({})
            .populate({ path: "author", model: User })
            .sort({ $natural: -1 })
            .lean()
            .then((posts) => {
              res.render("site/post", {
                post: post.toJSON(),
                categories: categories,
                posts: posts,
              });
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
//------------------------------------------------------------------
module.exports = router;
