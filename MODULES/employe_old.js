



//!fuction declaration,öncesinde çağrılsada çalışır
function sayHello(name) {
  console.log(`benim adim ${name}`);
}

let sayAge = function(age){
    console.log(`benim yasim ${age}`);
    
}


    // module.exports = sayName
    module.exports = {
        sayName:sayName,
        sayAge:sayAge
    }