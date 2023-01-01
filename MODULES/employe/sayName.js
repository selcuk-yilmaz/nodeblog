//!fuction expression öncesinde çağrılırsa ÇALIŞMAZ
let sayName = function (name) {
  console.log(`benim adim ${name}`);
};
// sayName("ayhan")
module.exports =sayName



//!DİKKAT FARKLI KULANIMLAR VAR yukardakinin aynısı olur
// module.exports = function (name) {
//   console.log(`benim adim ${name}`);
// };
//!DİKKAT FARKLI KULANIMLAR VAR bu sayfadan sadece maas functionu gönderir AMA .maas ile karsılanması gerekir
module.exports.nickName = function (nick) {
  console.log(`benim nickname ${nick}`);
};