const db = require('./dbConnection.js');

module.exports = {
  create: (address, callback) => {
    var queryString = 'INSERT INTO shipping (address1, address2, city, us_state, zip, users_id) VALUES (?, ?, ?, ?, ?, ?)';
    var params = [
      address.address1,
      address.address2,
      address.city,
      address.state,
      address.zip,
      address.user_id
    ]
    db.query(queryString, params, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    })
  }
};