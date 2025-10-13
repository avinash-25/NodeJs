//! Before using any built-in modules, we have to import them
//  let/const variableName = require("name of the module"); fs, path, os, etc.... ====> CommonJS
//  import variableName from "path of the modules" ===> ESM

//! fs stands for "file system"
// It provides utilities to interact with files and folders present.
// INTERACTION: ---> CRUD (Create, Read, Update, Delete)

// We can execute JS code in two ways --->
//? sync  (blocking code)
//? async (callbacks, then/catch, async/await): non-blocking code

import fs, {
  readFileSync
} from "fs";
// console.log(fs);

/*
"."   ---> means current folder
".."  ---> means one folder back
"/"   ---> means get inside current folder
*/

//! ================================ Synchronous execution using fs =================================

//! 1) CREATE --> creating a file

//?     method  ---> writeFileSync()
//todo  syntax  ---> fs.writeFileSync("path/name of the file", "data to be added");
// Both arguments are mandatory.

/*
console.log("start");
fs.writeFileSync("./data.json", `{"key2": "value2"}`);
fs.writeFileSync("../demo.txt", "Wow! You have created a file");

console.log("File added");
console.log("middle");
console.log("End");
*/

//todo: If the file is present at the given path, new data will override the old one.
//todo: If the file is not present, then file will be created with the given data.

//! ========== UPDATE: appending (add something at last) a file ==========

// Using this we can only add some data at the end of the line.

//?     method  ---> appendFileSync()
//todo  syntax  ---> fs.appendFileSync("path/name of the file", "new data");
// Both arguments are mandatory.
// If the file is present at the path, then data will be appended. Otherwise a new file will be created.

/*
console.log("File Opened");
fs.appendFileSync("./emp.java", `[
    {"key2": "value2"},
    {"key1": "value1"},
    {"key3": "value3"}
]`);
console.log("Data appended");
*/

//! ========== READ: fetch a file ==========

//?     method  ---> readFileSync()
//todo  syntax  ---> fs.readFileSync("path of the file", "encoding");
// Encoding: while converting into binary format, encoding value defines how many bits it will use to convert a single character/digit.
// Second argument is not mandatory.

// console.log(1);

// let data = readFileSync("./data.json");
// console.log(data);

// Buffer value --> array of binary numbers
//? Whatever the contents were, they got converted into binary format

//! 1) Use toString() ==> default value of toString() is UTF-8.
// console.log(data.toString("hex")); // buffer and streams

// console.log(2);
// console.log(3);

//! 2) Use encoding value
/*
console.log(1);

let data = fs.readFileSync("./data.json", "utf-8");
console.log(data);

console.log(2);
*/

//! Question: Copy the contents of "about.html" into a new file "about.txt"

// let payload = fs.readFileSync("./about.html", "utf-8");
// fs.writeFileSync("./about.txt", payload);
// console.log("File created");

//! 4) ========================= DELETE a file =========================

//?     method  ---> unlinkSync();
//todo  syntax  ---> fs.unlinkSync("path of the file");

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
    console.log("Something went wrong");
}
*/

//! 5) ====================== RENAMING a file/folder ======================

//?     method  ---> renameSync()
//todo  syntax  ---> fs.renameSync("old file path/name", "new file path/name")

// fs.renameSync("./about.html", "./about.md"); //? rename file
// console.log("File renamed");

// fs.renameSync("../about", "moreAbout"); //? rename folder

//! 6) ======================== CREATING folder ====================

//?     method  ---> mkdirSync()
//todo  syntax  ---> fs.mkdirSync("Path of the folder/name")

// console.log(1);
// fs.mkdirSync("./Folder1");
// console.log("Folder created");

// fs.mkdirSync("./Folder1/sub"); // For nested structure, create the outer layer first
// console.log("Sub-Folder created");

// console.log(2);
// console.log(3);

//todo Question: Create this structure --> "backend/controller/app.js"

// console.log(1);
// fs.mkdirSync("../../backend");
// console.log("Folder created");

// fs.mkdirSync("../../backend/controller"); // For nested structure, create the outer layer first
// console.log("Sub-Folder - 1 created");

// fs.writeFileSync("../../backend/controller/app.js", "data");
// console.log("Sub-Folder - 2 created");

// console.log(2);
// console.log(3);

//! 7) ======================== DELETING folder ====================

//?     method  ---> rmdirSync()
//todo  syntax  ---> fs.rmdirSync("path");

// fs.rmdirSync("../about");
// console.log("Folder deleted");

//todo Question: Delete the folder structure ---> "backend/controller/app.js"

/*
console.log(1);
fs.unlinkSync("../../backend/controller/app.js"); //! By this we can only delete files
console.log(3);
fs.rmdirSync("../../backend/controller"); // For nested structure, delete inner layers first

console.log(2);
fs.rmdirSync("../../backend");
console.log(1);
*/

//? Shortcut of above approach

// fs.rmdirSync("../../backend", {
//     recursive: true
// }); // To delete all files and folders recursively

// let fd = fs.openSync("./fs.js", "r");
// console.log(fd);

// console.log(fs.openSync("../fs modules", "r"));

//! 3) deleting a file
//? method name ==> unlink()
//* syntax --> unlink("path/name of the file.txt").then().catch()
// console.log(1);

// let deletePromise = fsPromise.unlink('./java,txt')

// deletePromise.then(()=>{
//     console.log('file deleted');

//     })
//     .catch((err)=>{
//         console.log('something went wrong');

//     })

//     console.log(2);
//     console.log(3);


// let promise = new Promise((res, rej)=>{
//     let a = 1;

//     if(a ==1){
//         res({name:"xyz"})
//     } else {
//         rej([1, 2, 3, 4])
//     }
// });

// console.log(promise);

// promise.then((a)=>{
//     console.log(a);
//     console.log("Promise is resolved");

// }).catch((err)=>{
//     console.log("something went wrong");

// })



//! updating a file, creating a folder, renaming a file/ folder, deleting a folder (Do your own)


//! =============== asynchronous execution using fs (promise --> asynx and await) ===========================

//? async and await both are keywords which are used together.
//? async is used in function decalaration.
//? await is used inside async function.
//? async function always return a promise

/*
async function greet() {
  return "HELLO";
}

let data = greet();
console.log(data);


async function getTodos1(params) {
  console.log("Fitst function");
  let output = await fetch("https");
  console.log("APi called - 1");

  // console.log(output);
  // let jsonData = await output.json();
  // console.log(jsonData);

}

getTodos1();
getTodos2();


async function getTodos2(params) {
  console.log("Second function");
  let output = await fetch("https");
  console.log("APi called - 2");

  // console.log(output);
  // let jsonData = await output.json();
  // console.log(jsonData);

}*/

import fsPromise from "node:fs/promises"


//! 1) creating a file
//? method name ==> writeFile();

/*
async function createFile() {
  await fsPromise.writeFile("./demo.txt", "data for demo.txt");
  console.log("File created");
}

createFile();


async function readFile(params) {

  let data = await fsPromise.readFile("./demo.txt", "utf-8");
  console.log("File read ", data);

}
readFile();
*/

//? name of the global object in nodejs is "GLOBAL".
//? fs:{readFile:function}
//? readFile: Function
//? }

//! create this structure ==> "Project/backend/App.js" (outer layer)

/*
async function createStructure() {
  await fsPromise.mkdir("./Project");
  await fsPromise.mkdir("./Project/backend");
  await fsPromise.writeFile("./Project/backend/app.js", `function(){return "Hello"}`);
  console.log("Structure created");
}

createStructure();
*/

//! deleting a file and folder, renaming a file.folder
// createStream