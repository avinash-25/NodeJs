import express from "express";
import connectDB from './config/db.js';
import fs from "fs";
import routesFile from './Routes/routes.js';



let app = express();

app.use(express.urlencoded({
    extended: true // middleware it parse/read the incoming html form data
}))
app.use("/api/v1", routesFile);
//! API versionaing, static path


app.listen(9000, (err) => {
    if (err)
        console.log(err);
    console.log("Server started");
});




//! home page
// app.get("/", (req, res) => {
//     res.send(`<h1>This is HomePage</h1>`);
// })

//! form page
app.get("/get-form", (req, res) => {
    let formContents = fs.createReadStream("./form.html", "utf-8")
    formContents.pipe(res);
})

//! form sunmit
//? in the HTML form
//? a) give value to action attribute which should same as the endpoint.
//?  b) set attribute method with its value as post.
//? c) use name attribute to give variable name 
app.post("/submit-form", async (req, res) => {
    console.log("user data: " + req.body);
    let {
        userEmail,
        userPassword
    } = req.body;
    console.log(req.body); //! whatever data user is submitting, it stores inside req.body which is an object.
    // { userEmail: 'abc', userPassword: '123' }
    // let coll = connectDB();
    // coll.insertOne({ userPassword, userEmail });

    let myCollection = await connectDB();
    // myCollection.insertOne({ userEmail: userEmail, userPassword: userPassword });
    let op = await myCollection.insertOne({
        userEmail,
        userPassword
    });

    res.json({
        success: true,
        message: "user registered successfully",
        op
    });
});

//! list
app.get("/all-users", async (req, res) => {
    let myCollection = await connectDB();
    let users = await myCollection.find().toArray();
    let nameArr = users.map((user) => user.userEmail);
    res.json({
        success: true,
        message: "users fetched",
        nameArr
    });
});

app.listen(9001, (err) => {
    if (err) console.log(err);
    console.log("server running");
});

//? nodemon -v
//? to stop/start mongodb server --> open cmd as admin >> net stop/start mongodb