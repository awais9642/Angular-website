const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;
const secretKey = 'your_secret_key';  // Replace with a secure key or use environment variables

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200', // Your Angular app URL
    credentials: true
  }));
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'awaisshakir679@gmail.com',  
        pass: 'xwju gpmb xoel ovuv'
    }
})
  

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

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;   
//     const query = 'SELECT * FROM userdata WHERE email = ? AND password = ?';
    
//     db.query(query, [email, password], (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ success: false, message: 'Internal server error' });
//         } else {
//             if (results.length > 0) {
//                 res.json({ success: true, message: 'Login successful' });
//             } else {
//                 res.status(401).json({ success: false, message: 'Invalid credentials' });
//             }
//         }
//     });
// });

app.post('/login', (req, res) => {
    debugger;
    const { email, password } = req.body;   
    const query = 'SELECT * FROM userdata WHERE email = ? AND password = ?';
    
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (results.length > 0) {
            const user = results[0];

            // Generate JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email }, 
                secretKey, 
                { expiresIn: '1h' } // Token expiration time
            );

            return res.json({ success: true, message: 'Login successful', token });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.post('/checkout', (req, res) => {
    const { firstName, lastName, contact, address, orderSummary, email } = req.body;
  
    if (!email || !firstName || !lastName || !contact || !address || !orderSummary) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
  
    const query = `
      UPDATE userdata 
      SET first_name = ?, last_name = ?, contact = ?, address = ?, order_summary = ? 
      WHERE email = ?
    `;
  

    const values = [firstName, lastName, contact, address, orderSummary, email];
  
    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error executing query:', error); // Consider logging only in development mode
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'No record found for the provided email' });
      }
  
      res.json({ success: true, message: 'Row updated successfully' });

    });
          
});

app.post('/send-confirmation-email',(req,res)=>{
    console.log('Received request:', req.body); // Add this line
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
const mailOptions = {
    from: 'awaisshakir679@gmail.com',
    to : email, //'shakirawais66@gmail.com',
    subject: 'Order Confirmation',
    html:`Confirm Order`
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.error('Error sending email:',error);
        return res.status(500).json({success:false,message:'failed to send email'});
    }
    res.json({success:true,message:'Order confirmation email sent successfully'});
    
});
});

// app.get('/test', (req, res) => {
//     res.json({ message: 'Express.js is connected to Angular!' });
// });

// API Route to Fetch All Users
// app.get('/products', (req, res) => {
//     db.query('SELECT * FROM products', (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });

app.get('/cartinfo', (req, res) => {
    const email = req.query.email; // Get email from query params

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const sql = 'SELECT * FROM userdata WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
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