require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); 

const app = express();
const PORT = 8080;

const db = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); 

db.connect(err => {
    if (err) {
        console.log("Error connecting to the database: " + err);
        return;
    }

    console.log("Connected to the database");
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

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
})