const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
});

app.use(express.json());
app.use('/', express.static('views'));
app.use('/compiled', express.static('compiled'));
app.use('/db', express.static('db'));

app.post('/', (request, response) => {
  console.log(request.body);
  response.status(201).send();
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});