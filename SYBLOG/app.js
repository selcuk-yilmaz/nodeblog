const path = require("path");
const express = require("express");
const exphbs =require("express-handlebars")
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static('public'))
// engine() yerine exphbs() kullandı
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// app.set("views", "./views");

app.get("/",(req,res)=>{
  // res.sendFile(path.resolve(__dirname,"site/index.html"))
  res.render("site/index");
})

app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/about");
});
app.get("/blog", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/blog");
});


app.listen(port, hostname, () => {
  console.log(`Server calisti mi, http://${hostname}:${port}/`);
});
