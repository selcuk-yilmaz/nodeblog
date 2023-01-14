const express = require("express");

const router=express.Router()

//! app yazan yerleri router ile değiştirdik.
router.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/index.html"))
  res.render("site/index");
});

router.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/about");
});
router.get("/blog", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))



  
  res.render("site/blog");
});
router.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/contact");
});
router.get("/login", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/login");
});
router.get("/register", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/register");
});




module.exports=router