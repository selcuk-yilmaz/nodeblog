// const path = require("path");  //!buna gerek kalmadı.
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileUpload");
const generateDate = require("./helpers/generateDate").generateDate;
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
//!mongoose kullanımı.veritabanı ile irtiibatı sağlar ve verileri database yazar
mongoose
  .set("strictQuery", true)
  .connect("mongodb://127.0.0.1/nodeblog_db")
  .then(() => console.log("Connected!"));
// ,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// };

const mongoStore = connectMongo(expressSession);
app.use(
  expressSession({
    secret: "testotesto",
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//! Flash - Message Middleware
app.use((req, res, next) => {
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

app.use(fileUpload());

//! static dosyaların okunması için
app.use(express.static("public"));

//!aşağıyı burda da yapabiririz ama helpers folderına taşıyoruz sonra yukarda bağlantısını veriyoruz modülerbir yapı için
// const hbs =exphbs.create({
//   helpers:{
//     generateDate:(date,format) =>{
//       return moment(date).format(format)
//     }
//   }
// })

//!template engine ler HTML sayfalarını daha kolay yazdırmamızı sağlar.ör:handlebars
app.engine(
  "handlebars",
  exphbs.engine({ helpers: { generateDate: generateDate } })
);
app.set("view engine", "handlebars");
// app.set("views", "./views");

//! bodyparser db i okuma işlemidiir.Bu sayfada en sona yazdın çalışmadı??? app.js de sıra önemli
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//!kendi middleware lerimizi create edebiliriz.Why?bir işlem yapmadan önce dataya ihtiyaç duyarız yada başka şeylere bu datayı veya işlemleri elde edebilmek için middle ware kullanırız.örnek deneme bir middleware
// const myMiddleware =(req,res,next) =>{
//   console.log(`'benim adım tatarramazan'`)
//   next()
// }
// app.use('/',myMiddleware)

app.listen(port, hostname, () => {
  console.log(`Server is working, http://${hostname}:${port}/`);
});

//!display or displaynone links middleware
app.use((req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    res.locals = {
      displayLink: true,
    };
  } else {
    res.locals = {
      displayLink: false,
    };
  }
  next()
})

const main = require("./routes/main");
app.use("/", main);

const posts = require("./routes/posts");
app.use("/posts", posts);

const users = require("./routes/users");
app.use("/users", users);

//!bu bölümü routes a taşıdık.buraya main post users ı taşıdık
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
