let sayName = require("./sayName")
let sayNickName = require("./sayName").nickName
let sayAge = require("./sayAge")


module.exports = {
  sayName: sayName,
  sayAge: sayAge,
  sayNickName:sayNickName,
};

// //!fuction expression öncesinde çağrılırsa ÇALIŞMAZ
// let sayName = function (name) {
//   console.log(`benim adim ${name}`)
// };
// // sayName("ayhan")

// //!fuction declaration,öncesinde çağrılsada çalışır
// function sayHello(name) {
//   console.log(`benim adim ${name}`)
// }

// let sayAge = function (age) {
//   console.log(`benim yasim ${age}`)
// };

// // module.exports = sayName
// module.exports = {
//   sayName: sayName,
//   sayAge: sayAge,
// };
