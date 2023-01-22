const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("site-admin/index");
});

router.get("/categories", (req, res) => {
  res.render("site-admin/categories");
});

module.exports = router;