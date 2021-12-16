const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
});

dbConnection.connect( (error) => {
  if (error) {
    throw error;
  }
})

module.exports = dbConnection;