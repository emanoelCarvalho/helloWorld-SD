require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/data", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.status(500).send("Error retrieving data from the database");
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
