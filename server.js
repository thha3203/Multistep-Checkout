const express = require('express');

const app = express();
const port = 3000;

app.use('/', express.static('views'));
app.use('/compiled', express.static('compiled'));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
})