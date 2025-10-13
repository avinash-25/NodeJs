import fs from 'fs';

//! read

// let read = fs.createReadStream("./index.html", 'utf-8');
// // console.log(read);
// read.on('data', (chunk) => {
//     console.log(chunk);
// })

//! Write
/*
let result = fs.createWriteStream("./demo.txt");
// console.log(result);

result.write("Data to be overWritten", () => {
    console.log("File Written");
})
*/

//! duplex
/*
let read = fs.createReadStream("./index.html", 'utf-8');
let write = fs.createWriteStream('./demo.txt');

// ? pipe() ====> source.pipe(destination)

read.pipe(write);
console.log('File written');
*/