const express = require('express');
const routerApi = require('./routes');
const { logError, errorHandler, wrapError } = require('./middlewares/errorHandlers');
const notFoundHandler = require('./middlewares/notFoudHandler');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Porfolio API');
});

routerApi(app);

app.use(notFoundHandler);
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is running in port: ' +  port);
  console.log('Go to the page: ' +  `http://localhost:${port}`);
});

module.exports = app;
