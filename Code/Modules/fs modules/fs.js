//! before using any built in modules, we have to import it
//  let/const variableName = require("name of the module"); fs, path, os, etc....  ====> commonJS
// import variableName form "path of the modules" ===> ESM

//! fs stands for "file system"
// it provides utilities to internet with files present.
// INTERACTION  :---> CRUD(create, read, update, delete)

// we can execute js code in two ways  --->
//? sync  (blocking code)
//? async ( callbacks, then/catch.  async/await) : non-blocking code

import fs, {
    readFileSync
} from "fs";
// console.log(fs);

/*
"." --->  means current folder
".." --> means one filder back
"/" ---> means get inside current folder

*/


//! ================================   Synchromous execution using fs  =================================

//! 1)  create  -->  creating a file

//?     method  --->  writeFileSync()
//todo  syntax  ---->  fs.writeFileSync("path/ name of the file", "data to be added");
// both the arguments are mandatory.
/*
console.log("start");
fs.writeFileSync("./data.json", `{"key2": "value2"}`);

fs.writeFileSync("../demo.txt", " Waoo you have created file");

console.log("File addedd");
console.log("middle");
console.log("End");
*/
//todo:  if the file is present at the given path, new data will override the old one.
//todo:  if the file is not present, then file will be created with the given data.



//! <<=========== update  :  appending(add something at last) a file  ===============>>
// using this we can only add some data at the last of the line.

//?     method  --->  appendFileSync()
//todo  syntax  ---->  fs.appendFileSync("path/ name of the file", "new data");
// both the arguments are mandatory.
// if the file is present at the path, then data will be appended. otherwise a new file will be created.

/*
console.log("File Opened");
fs.appendFileSync("./emp.java", `[
    {"key2": "value2"},
    {"key1": "value1"},
    {"key3": "value3"}
]`);
console.log("Data appended");

*/


//! <<=========== read  :  fetch a file  ===============>>

//?     method  --->  readFileSync()
//todo  syntax  ---->  fs.readFileSync("path of the file", "encoding");
// second argument is not mandotary.

console.log(1);

let data = readFileSync("./data.json");
console.log(data);
// buffer value --> array of binary numbers
console.log(2);
console.log(3);