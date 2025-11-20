import express from 'express';
import path from 'node:path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/profile/:username", (req, res) => {
    res.send(`Welcome, ${req.params.username}`);
})

app.listen(3000, () => {
    console.log("Its running");
});
