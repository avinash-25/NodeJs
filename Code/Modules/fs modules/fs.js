//! before using any built in modules, we have to import it
//  let/const variableName = require("name of the module"); fs, path, os, etc....  ====> commonJS
// import variableName form "path of the modules" ===> ESM

//! fs stands for "file system"
// it provides utilities to internet with filesvand folders present.
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
// encoding : while converting into binary format, encoding value defines that how many bits will it use the convert a single  character/difit.
// second argument is not mandotary.

// console.log(1);

// let data = readFileSync("./data.json");
// console.log(data);

// buffer value --> array of binary numbers
//? Whatever was the contents, it got converted into binary format
//!  1) use toString()  ==>  default value of toString() is UTF-8.
// console.log(data.toString("hex")); // buffer and strams

// console.log(2);
// console.log(3);


//!  2) use encoding value
/*
console.log(1);

let data = fs.readFileSync("./data.json", "utf-8");
console.log(data);

console.log(2);
*/

//!  ques)   copy the contents of "about.html" into a new file "about.text"

// let payload = fs.readFileSync("./about.html", "utf-8");

// fs.writeFileSync("./about.txt", payload);
// console.log("File created");

//! 4) <========================= delete a file  ==========================>

//? method ------>  unlinkSync();
// syntax ------->  fs.unlinkSync("path osf the file");
/*
try {
  console.time("file op");
  console.log("Start");

  fs.unlinkSync("./about.txt");
  console.log("File deleted");

  console.log("middle");
  console.log("End");

  console.timeEnd("file op");
} catch (error) {
  console.log("somethig went wrong");
}
*/

//!  5) <======================  renaming a file/folder  ========================>

//? method name ===>  renameSync()
// syntax --->  fs.renameSync("old file path/name", "new file path/name")

// fs.renameSync("./about.html", "./about.md"); //? rename file
// console.log("File renamed");

// fs.renameSync("../about", "moreAbout"); //? rename folder


//!  6) <<======================== creating folder   ====================>>
//? method name ===>  mkdirSync()
//? Syntax  =======>  fs.mkdirSync("Path of the folder/name")

// console.log(1);
// fs.mkdirSync("./Folder1");
// console.log("Folder created");

// fs.mkdirSync("./Folder1/sub"); // for nested structure. create the oute layer first
// console.log("Sub-Folder created");

// console.log(2);
// console.log(3);

//todo  ques)  create this structure  -->  "backend/controller/app.js"

// console.log(1);
// fs.mkdirSync("../../backend");
// console.log("Folder created");

// fs.mkdirSync("../../backend/controller"); // for nested structure. create the oute layer first
// console.log("Sub-Folder - 1 created");
// fs.writeFileSync("../../backend/controller/app.js", "data");

// console.log("Sub-Folder - 2 created");



// console.log(2);
// console.log(3);

//!  7) <<======================== deleting folder   ====================>>
//? method name ==>  rmdirSync()
// syntax ----->    fs.rmdirSync();

// fs.readdirSync("../about");
// console.log("Folfer deleted");

//todo  ques)  delete the folder structure --->  "backend/controller/app.js"

/*
console.log(1);
fs.unlinkSync("../../backend/controller/app.js"); //! by this we can only delete one empty folder
console.log(3);
fs.rmdirSync("../../backend/controller"); // for nested structure. create the oute layer first

console.log(2);
fs.rmdirSync("../../backend");
console.log(1);
*/
//? shortcut of above

// fs.rmdirSync("../../backend", {
//   recursive: true
// }) // do delete all files and folders recursively

let fd = fs.open("./fs.js");
console.log(fd);

console.log(fs.open("../fs modules"));