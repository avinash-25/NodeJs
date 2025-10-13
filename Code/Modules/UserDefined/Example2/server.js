//! module wrapper --->  every code in nodeJS is wrapped inside an IIFE by nodeJS, with 5 parameters passed namely  ==> exports, require, module, __filename, __dirname

console.log("Inside server.js");

function printName(name) {
    console.log("hello, ", name);
}

function printAge(age) {
    console.log("Age, ", age);
}


module.exports = {
    printName,
    printAge
}

//! iife immediately invoked function expression
// behind the scene nodejs exports and import module totallt depends on the `iife` they follow the syntax written below.
// The order of parameters are same as written here.
// 

/*
    (function (exports, require, module, __filename, __dirname) {
        console.log("Inside server.js");

        function printName(name) {
            console.log("hello, ", name);
        }

        function printAge(age) {
            console.log("Age, ", age);
        }
    })()
    
*/