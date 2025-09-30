import express from "express";
import fs from "fs";
import {
    join
} from "path";

let app = express();

app.listen(9000, (err) => {
    if (err)
        console.log(err);
    console.log("Server started");
});


//! home page
app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`);
})

//! form page
app.get("/get-form", (req, res) => {
    let formContents = fs.createReadStream("./form.html", "utf-8")
    formContents.pipe(res);

})

//! form sunmit
app.post("/submit-form", (req, res) => {

})

//! list
app.get("/all-users", (req, res) => {

})