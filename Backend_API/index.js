const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }))
// app.use(cors());

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  // API Endpoint to get users
app.get('/users', (req, res) => {
    res.json(users);
  });

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',      // MySQL Server (use 127.0.0.1 if localhost fails)
    user: 'root',           // Your MySQL username
    password: 'AWAIS123',   // Your MySQL password (leave empty if none)
    database: 'expressjs'   // Database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.get('/test', (req, res) => {
    res.json({ message: 'Express.js is connected to Angular!' });
});

// API Route to Fetch All Users
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/product_details', (req, res) => {
    db.query('SELECT * FROM product_details', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// API Route to Add a New User
// app.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.json({ message: 'User added successfully!', userId: results.insertId });
//         }
//     });
// });

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});