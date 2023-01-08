// let sayAge = require('./employe.js');
// let sayName33 =require('./employe.js')
// sayName33("ayhan");
// sayAge(37)
//!Yukardaki  gibi tek tek functionları çağırmak ve çalıştırmak akıl işi değil aşağıda gibi yapıyoruz.
let employe = require("./employe/index_old") //index yazmasanda o index i çeker
// let sayAge = require("./employe").sayAge  /employe içinden sadece sayAge çekmek istersen.bu sefer sayAge(19) şeklinde çağrmalıyız.


employe.sayName("ayhan");
employe.sayAge(7);
employe.sayNickName("father")


// const http=require ("http")

// const hostname="127.0.0.1"
// const port=3000
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     res.statusCode=200
//     res.setHeader('content-Type','text/plain')
//     res.end('hello Node.js')
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server çalisiyor,http://${hostname}:${port}/`);
    
// })