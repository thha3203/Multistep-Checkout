const express = require('express');
const mysql = require('mysql2');
const user = require('./users.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', express.static('views'));
app.use('/compiled', express.static('compiled'));
app.use('/db', express.static('db'));

app.post('/users', (request, response) => {
  var userInfo = {
    username: request.body.username,
    pass: request.body.pass,
    email: request.body.email
  }
  user.create(userInfo, (error, result) => {
    if (error) {
      console.log('ERROR: ' + error);
    } else {
      console.log('CREATED', result);
    }
  })
  response.status(201).send();
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});