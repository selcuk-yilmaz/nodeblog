// const path = require("path");  //!buna gerek kalmadı.
const express = require("express");
const exphbs =require("express-handlebars")
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

const mongoose = require("mongoose")
mongoose
  .connect("mongodb://127.0.0.1/nodeblog_db")
  .then(() => console.log("Connected!"));

app.use(express.static('public'))

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// app.set("views", "./views");

app.listen(port, hostname, () => {
  console.log(`Server calisti mi, http://${hostname}:${port}/`);
});

const main = require('./routes/main')
app.use('/',main)

//!bu bölümü routes a taşıdık below yerine 23. ve 24. satıra yazılana bak
// app.get("/",(req,res)=>{
//   // res.sendFile(path.resolve(__dirname,"site/index.html"))
//   res.render("site/index");
// })

// app.get("/about", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/about");
// });
// app.get("/blog", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/blog");
// });
// app.get("/contact", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/contact");
// });
// app.get("/login", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/login");
// });
// app.get("/register", (req, res) => {
//   // res.sendFile(path.resolve(__dirname,"site/about.html"))
//   res.render("site/register");
// });




