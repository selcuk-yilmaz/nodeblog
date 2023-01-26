const mongoose = require("mongoose");
const Schema = mongoose.Schema
//!AŞAĞIDA KULLANDIĞIMIZ  title,content... key leri Post yapan formlarda value olarak olmak zorunda yoksa veri tabanına kaydetmek ve okumakta sıkıntı  çıkar.
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author:{type: Schema.Types.ObjectId,ref:'users'},
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: {type: Schema.Types.ObjectId, ref:'categories'},
  post_image: { type: String, required: true }
});
module.exports= mongoose.model("Post",PostSchema)