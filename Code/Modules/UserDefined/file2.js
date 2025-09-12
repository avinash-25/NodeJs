//!============================  commomJS modules  =====================================================
//! syntax for import
//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  1)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//? let/const variableName = require("path of the file")

/*
let value = require("./file1"); // extension doesnot matter.

console.log(value);

console.log(value.string);
console.log(value.greet());
console.log(value.emp.name);
*/


//! >>>>>>>>>>>>>>>>>>>>>  2)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// use destructuring for import 

//? let/const {key1, key2, ......} = require("Path of the file")

let {
    greet,
    string,
    emp
} = require("./file1");


let result = greet();
console.log(result);
console.log(string); //console.log(CSSMathValue.greet);
console.log(emp);