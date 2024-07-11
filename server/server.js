const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const customerRouter = require('./routes/CustomersRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: 'customerDB'
});

// app.post('/customers', (req, res) => {
//     console.log('POST /customers');

//     const query = 'INSERT INTO customers (name, ic_number, date_of_birth, address, address_country, address_postcode) VALUES (?, ?, ?, ?, ?, ?)';
//     const params = [req.body.name, req.body.ic_number, req.body.date_of_birth, req.body.address, req.body.address_country, req.body.address_postcode];

//     db.query(query, params, (err) => {
//         if (err) {
//             console.log('Error:', err); // Add console.log statement here
//             return res.status(500).json({ error: err });
//         }
//         res.status(200).json({ message: 'Customer created successfully' });
//     });
// });

// app.get('/customers', (req, res) => {
//     console.log('GET all customers');
//     db.query('SELECT * FROM customers', (err, results) => {
//         if (err) {
//             console.log('Error:', err); // Add console.log statement here
//             return res.status(500).json({ error: err });
//         }
//         res.status(200).json(results);
//     });
// });

// app.get('/customers/:id', (req, res) => {
//     console.log('GET customers');
//     const customerId = req.params.id;
//     db.query('SELECT * FROM customers WHERE id = ?', [customerId], (err, results) => {
//         if (err) {
//             console.log('Error:', err); // Add console.log statement here
//             return res.status(500).json({ error: err });
//         }
//         res.status(200).json(results);
//     });
// });

// app.put('/customers/:id', (req, res) => {
//     console.log('PUT customers');
//     const customerId = req.params.id;

//     const query = 'UPDATE customers SET name = ?, ic_number = ?, date_of_birth = ?, address = ?, address_country = ?, address_postcode = ? WHERE id = ?';
//     const params = [req.body.name, req.body.ic_number, req.body.date_of_birth, req.body.address, req.body.address_country, req.body.address_postcode, customerId];

//     db.query(query, params, (err) => {
//         if (err) {
//             console.log('Error:', err); // Add console.log statement here
//             return res.status(500).json({ error: err });
//         }
//         res.status(200).json({ message: 'Customer updated successfully' });
//     });
// });

// app.delete('/customers/:id', (req, res) => {
//     console.log('DELETE customers');
//     const customerId = req.params.id;
//     db.query('DELETE FROM customers WHERE id = ?', [customerId], (err, result) => {
//         if (err) {
//             console.log('Error:', err); // Add console.log statement here
//             return res.status(500).json({ error: err });
//         }
//         res.status(200).json({ message: 'Customer deleted successfully' });
//     });
// });

app.use('/customers', customerRouter);

app.listen(port, () => {

    console.log(`Server listening on port ${port}`);
    console.log(`URL : http://localhost:${port}`);
});
