//Libraries
const express = require('express');
//Requires
const routerApi = require('./routes');
const { logError, errorHandler, wrapError } = require('./middlewares/errorHandlers');
const notFoundHandler = require('./middlewares/notFoudHandler');
//Setup
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to Porfolio API');
});
routerApi(app);
//Middlewares
app.use(notFoundHandler);
app.use(logError);
app.use(wrapError);
app.use(errorHandler);
//Listen port
app.listen(port, () => {
  console.log('Server is running in port: ' +  port);
  console.log('Go to the page: ' +  `http://localhost:${port}`);
});

module.exports = app;
