const express = require('express');
const mysql = require('mysql2');
const user = require('./users.js');
const shipping = require('./shipping.js');
const billing = require('./billing.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/checkout', express.static('views'));
app.use('/compiled', express.static('compiled'));
app.use('/db', express.static('db'));

app.get('/', (request, response) => {
  response.redirect('/checkout');
})

app.post('/users', (request, response) => {
  user.create(request.body, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log('CREATED USER', result);
      response.status(201).send(result);
    }
  })
});

app.post('/shipping', (request, response) => {
  shipping.create(request.body, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log('CREATED SHIPPING', result);
      response.status(201).send();
    }
  });
});

app.post('/billing', (request, response) => {
  billing.create(request.body, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log('CREATED BILLING', result);
      response.status(201).send();
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});