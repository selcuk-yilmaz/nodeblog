const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.redirect("site-admin/index");
});

module.exports = router;