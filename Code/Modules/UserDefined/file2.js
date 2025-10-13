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
//! use destructuring for import

//? let/const {key1, key2, ......} = require("Path of the file")

/*
let {
    greet,
    string,
    emp
} = require("./file1");


let result = greet();
console.log(result);
console.log(string); //console.log(CSSMathValue.greet);
console.log(emp);

console.log(emp.fun());

*/

//! 2nd method
/*
const string = require("./file1");
const emp = require("./file1");
let value = require("./file1");
console.log(value);
console.log(emp);
console.log(string); // all three consoles have same value because the all are overrides by last one value that is 'string'

*/


//!=================   ESM format import  ===============
//! 1)  importing via destructuring. ---->  always destructure named exprot (always pass the extensions ---> .js)
/*
//? syntax ====>  import {} from "path";


import {
    greet,
    emp,
    string
} from './file1.js';

console.log(emp);
console.log(greet());
console.log(string);
*/

//! importing default export
/*
import printName from "./file1.js";
import value from "./file1.js"

value("Avinash");
printName("Ranjan");
*/