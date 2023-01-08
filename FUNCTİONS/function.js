// function makeFile(){
//     console.log("dosya oluştur");
    
// }
// makeFile();
//! NODE JS İN JS İN ASENKRON LUĞUNU SAĞLAYAN ŞEY CALLBACK FUNCTİON
function makeFile(callback){
    console.log("dosya oluştur")
    let file = {
        name:"jsFile"
    }
    callback(file)
}
makeFile(function(myFile){
    console.log(`${myFile.name} oluşturulmaya başlandi`);
    
})
//! NORMAL FUNCTİONS
let sum = function(x,y){
    return x+y
} 
let sayName=function(name){
    return(`benim adim${name}`);
}
let square=function(x){
    result= x*x
    return result
}
//!ARROW FUNCTİON
let sumArrow=(x,y)=> x+y
let sayNameArrow = (name) => `benim adim ${name}`;
console.log(sayNameArrow("selcuk"));
let squareArrow=()=>{
    result = x * x;
    return result;
}
console.log(square(5));

