import {
    createReadStream
} from "fs";
import connectDB from "../config/db.js";

export function displayHomePage(req, res) {
    res.send(`<h6>Home Page</h6>`);
}

export function displayFormPage(req, res) {
    let formContents = createReadStream("./form.html", "utf-8");
    formContents.pipe(res);
}

export async function submitForm(req, res) {
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
}

export async function getAllUSers(req, res) {
    let myCollection = await connectDB();
    let users = await myCollection.find().toArray();
    let nameArr = users.map((user) => user.userEmail);
    res.json({
        success: true,
        message: "users fetched",
        nameArr
    });
}