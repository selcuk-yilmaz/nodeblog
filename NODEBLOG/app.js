//!ARTIK SUNUCUMUZU EXPRESS KÜTÜPHANESİ KULLANARAK OLUŞTURACAĞIZ
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static('public'))


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/users/:userID/movies/:moviesID", (req, res) => {
  res.send(
    `<h1>kullanıcı Adı: ${req.params.userID}</h1>
    <h1>Film  Adı: ${req.params.moviesID}</h1>
    
    `
  );
});

app.listen(port, hostname, () => {
  console.log(`Server calisti mi, http://${hostname}:${port}/`);
});

//!AŞAĞIDA SUNUCUMUZU NODE.JS KODLARI YAZARAK OLUŞTURDUK
// const http=require("http")
// const fs = require("fs")

// const hostname='127.0.0.1'
// const port=3000

// const indexPage = fs.readFileSync("index.html")
// const aboutPage = fs.readFileSync("about.html")
// const contactPage = fs.readFileSync("contact.html")
// const notFoundPage = fs.readFileSync("404.html")

// const server = http.createServer((req,res)=>{
// if(req.url==="/"){
//     // return res.end("HOME PAGE")
//     return res.end(indexPage);
// }else if(req.url ==="/about"){
//     return res.end(aboutPage);
// }else if(req.url ==="/contact"){
//     return res.end(contactPage);
// }else{
//     res.statusCode=404
//     res.end(notFoundPage);
// }

//     // console.log(req.url);
//     // res.statusCode=200
//     // res.setHeader("content-Type","text/plain")
//     // res.end('Hello NODE.js')
// })
// server.listen(port,hostname,()=>{
//     console.log(`Server calisti mi, http://${hostname}:${port}/`);
// })
