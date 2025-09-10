"use strict";

//! Ex 1 (synchronous)
// console.log("start");
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log("middle");
// console.log("end");
//! Ex 1 (asynchronous)
// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 0);
//todo:  0 is saying that How much minimum time to wait.
//todo:  maxm time depends on how lengthy the code is.
// console.log("Start");
// for (let i = 0; i < 2000; i++) {
//     console.log(i);
// }
//! Ex 2
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000)
// setTimeout(() => {
//     console.log(3);
// }, 1000)
// console.log(4);
//! Ex 3
// setTimeout(() => {
//     console.log("timeout 1");
// });
// for (let i = 0; i < 2000; i++) {
//     console.log("");
// }
// console.log("start");
//! promise
var promise = fetch("https://jsonplaceholder.typicode.com/posts");
promise.then(function (value) {
  console.log(value);
  var jsonData = value.json();
  console.log(jsonData);
  jsonData.then(function (data) {
    console.log(data);
  })["catch"](function (err) {
    console.log(err);
  });
  console.log("inside then");
})["catch"](function (err) {
  console.log(err);
  console.log("Inside catch");
});