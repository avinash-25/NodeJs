//! 1) import express module
// const express = require("express");
import express from "express";

// console.log(express);

//! 2) invoke the top-level function
let app = express();

// console.log(app);


//! 3) assign a port number

app.listen(9000, (err) => {
    if (err)
        console.log(err);
    console.log("server running");
});

//! 4) create routes
// format of get/post/put/patch/delete = {'endpoint', callback}

app.get("/", (req, res) => {
    // res.send("Hello world");

    res.json({
        "Message": "Homepage",
        success: true
    }); // send data to the clint in json format
}) // using json() we can send json responses.

//! download page
app.get("/download", (req, res) => {
    res.send("Download page");
});