/*
function greet() {
    console.log("Good morning...!!");
    return "Good morning from greet()";
}

let emp = {
    name: "abc",
    age: 24,
    fun: function func() {
        console.log("Hello from func");
        return 0;
    }
};

let string = "admin";

*/
//! commomJS format
//? pack or export first

//! 1. first wat to export (By the help of object, make one object and pass all the data)
/*
module.exports = {
    greet, // here only pass the name of function , dont call the function.
    emp,
    string,
};
*/

//! 2. second way to export (By using module.exports)
/*
module.exports = greet;
module = greet
module.exports = emp; // this line override the previous line
module.exports = string; // this line also oerrides previous both line.

//? this is like a default export, can only be used one time in a file and with this we can export a simgle component.

//? all previous export stataments will be overridden by the next one.

//? destructuring are not possible here because we are exports one by one.
*/

//!==================   ESM format  ==========================
/*
//? syntax :
// export  let.const variablename = value;



export function greet() {
    console.log("Good morning...!!");
    return "Good morning from greet()";
}

export let emp = {
    name: "abc",
    age: 24,
    fun: function func() {
        console.log("Hello from func");
        return 0;
    }
};

export let string = "admin";

*/

//!==================   default export ========================
/*
let printName = (name) => {
    console.log(name);
}
export default printName; // only one component can be exported in this way
*/