const db = require('./dbConnection.js');

module.exports = {
  create: (user, callback) => {
    var queryString = 'INSERT INTO users (username, pass, email) VALUES(?, ?, ?)';
    var userInfo = [user.username, user.pass, user.email];
    db.query(queryString, userInfo, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
};