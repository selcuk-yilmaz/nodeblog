const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static('public'))

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/",(req,res)=>{
  // res.sendFile(path.resolve(__dirname,"site/index.html"))
  res.render("site/index");
})



app.listen(port, hostname, () => {
  console.log(`Server calisti mi, http://${hostname}:${port}/`);
});

