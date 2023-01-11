const mongoose = require("mongoose");

const Post =require('./models/Post')
mongoose.connect("mongodb://127.0.0.1/nodeblog_db_test");

//!data find= READ
//!belli bir field e göre datayı bulma
// Post.find({
//   title: "v2 benim adım post başlığı",
// });
//!ID yegöre bulma
// Post.findById("63bf07d994cd0cf717dbbd46", (error, post) => {
//   console.log(error, post);
// });
//! bütün datayı bulma
// Post.find({ },(error,post)=>{
//     console.log(error,post);
// })

//!data= CREATE
// Post.create({
//     title:'v2 benim adım post başlığı',
//     content:'v2 post içeripi node js nasıl bir enviroment'
// },(error,post)=>{
//     console.log(error,post)
// })
//!DATA  UPDATE
// Post.findByIdAndUpdate("63bf07d994cd0cf717dbbd46",{
//     title:"ben update özelliği"
// }, (error, post) => {
//     console.log(error, post);
// });
//! DELETE
// Post.findByIdAndDelete('63bf0901adacf5481dce1cd8',(error,post)=>{
//     console.log(error,post)
// })