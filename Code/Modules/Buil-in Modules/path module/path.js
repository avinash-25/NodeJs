import path from 'path'

// console.log(__filename);
//D: \MERN\ NodeJs\ Code\ Modules\ Buil - in Modules\ path module\ path.js
//? absolute path of the file


// console.log(__dirname);
//D:\MERN\NodeJs\Code\Modules\Buil-in Modules\path module
//? absolute path of the folder



//! extname(), basename(), format(), parse(), join()

//! join("", "", "");
console.log(path.join("folder - 1", "folder - 2"));
//folder1/folder2

console.log(path.join("folder - 1", "folder - 2", "f3"));
//folder1/folder2/f3