const express = require('express');
const { routerApi } = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Porfolio API');
});

routerApi(app);

app.listen(port, () => {
  console.log('Server is running in port: ' +  port);
  console.log('Go to the page: ' +  `http://localhost:${port}`);
});
