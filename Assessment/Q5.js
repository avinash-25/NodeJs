import fs from 'fs'

const a = 10;
const b = 0;

let sum = a + b;
let sub = a - b;
let mult = a * b;

let div = 0;

if (a === 0)
    div = "Divide in Zero"
if (b === 0)
    div = "Divide by zero"
else
    div = a / b;

let content = `Addition : ${sum}
               Substraction : ${sub}
               Multiplication : ${mult}
               Division : ${div}`

fs.writeFileSync("./result.txt", content);
console.log("Data written");