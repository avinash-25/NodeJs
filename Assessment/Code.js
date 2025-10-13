//! Q2 read data from file

/*
import fs from 'fs';

let data = fs.readFileSync("./QuestionAns.md", "utf-8");
console.log(data);
*/

//! Q3

import http, {
    get
} from 'http';

let server = http.createServer((req, res) => {

});

server.listen("9000", (err) => {
    if (err)
        console.log(err);
    console.log("Server running");
})