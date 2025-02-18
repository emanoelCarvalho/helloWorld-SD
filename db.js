const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to the database: " + err);
    return;
  }
  console.log("Connected to the database");

  seedDatabase();
});

function seedDatabase() {
  const checkTableQuery = "SELECT COUNT(*) AS count FROM users";

  db.query(checkTableQuery, (err, results) => {
    if (err) {
      console.log("Error checking the users table: " + err);
      return;
    }
    if (results[0].count === 0) {
      const insertQuery = `
                INSERT INTO users (name) 
                VALUES 
                    ('Emanoel Carvalho'),
                    ('Cleiton Lucas'),
                    ('Gean ')
            `;

      db.query(insertQuery, (err, result) => {
        if (err) {
          console.log("Error inserting initial data: " + err);
          return;
        }
        console.log("Database seeded with initial data");
      });
    } else {
      console.log("Users table already has data, skipping seeding");
    }
  });
}

module.exports = db;
