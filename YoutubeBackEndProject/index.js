const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req,res) => {
    res.send("Hello from server");
})


app.listen(3000);

