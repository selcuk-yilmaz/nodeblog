const mongoose = require("mongoose");
//!AŞAĞIDA KULLANDIĞIMIZ  title,content... key leri Post yapan formlarda value olarak olmak zorunda yoksa veri tabanına kaydetmek ve okumakta sıkıntı  çıkar.
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  post_image: { type: String, required: true }
});
module.exports= mongoose.model("Post",PostSchema)