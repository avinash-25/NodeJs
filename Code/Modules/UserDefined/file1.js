function greet() {
    console.log("Good morning...!!");
    return "Good morning from greet()";
}

let emp = {
    name: "abc",
    age: 24
};

let string = "admin";

//! commomJS format
//? pack or export first

//! 1.
module.exports = {
    greet, // here only pass the name of function , dont call the function.
    emp,
    string,
};

//! 2.