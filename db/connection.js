const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'j8T#01hGe%5',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;