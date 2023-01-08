//!fuction declaration,öncesinde çağrılsada çalışır
function sayName(name) {
  console.log(`benim adim ${name}`);
}
//! function expression öncesinde çağrılsada çalışmaz
let sayAge = function (age) {
  console.log(`benim yasim ${age}`);
};

// module.exports = sayName  /sadece bir function export etmek için
//!birden fazla function aşağıdaki gibi export edilir.
module.exports = {
  sayName: sayName,
  sayAge: sayAge,
};
