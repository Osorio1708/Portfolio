const express = require('express');

const portfolioRouter = require('./portfolio.router');
const twitterRouter = require('./twitter.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/portfolio', portfolioRouter);
  router.use('/twitter', twitterRouter);
};

module.exports = routerApi ;
