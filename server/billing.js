const db = require('./dbConnection.js');

module.exports = {
  create: (billing, callback) => {
    var queryString = 'INSERT INTO billing (card_number, expiry, cvv, zip, users_id) VALUES (?, ?, ?, ?, ?)';
    var params = [
      billing.cardNumber,
      billing.expDate,
      billing.cvv,
      billing.zip,
      billing.user_id
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