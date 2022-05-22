const express = require('express');
const validationHandler = require('../middlewares/validationHandler');
const {
  updatePortfolioSchema,
  createPortfolioSchema,
} = require('../schemas/portfolio.schema');
const PortfolioService = require('../services/portfolio.service');
const portfolioService = new PortfolioService();
const { ResponseBase } = require('../models/response.model');

const TwitterService = require('../services/twitter.service');
const twitterService = new TwitterService();

const RenderPortfolioView = require('../views/renderPortfolio.view');
const renderPortfolio = new RenderPortfolioView();

const router = express.Router();

router.get('/print/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    renderPortfolio.portfolio = await portfolioService.getPortfolioById(id);
    renderPortfolio.twits = await twitterService.getTimeline();
    res.status(200).send(renderPortfolio.sendScreen());
  } catch (err) {
    next(err);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const response = new ResponseBase();
    const data = await portfolioService.getPorfolioList();
    response.message = 'Get Portfolio List';
    response.statusCode = 200;
    response.data = data;
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = new ResponseBase();
    const data = await portfolioService.getPortfolioById(id);
    if (typeof data.Item === 'undefined') {
      response.message = 'Portfolio doesnt exist';
      response.statusCode = 400;
      response.data = id;
      res.status(400).json(response);
    } else {
      response.message = 'Get Portfolio';
      response.statusCode = 200;
      response.data = data;
      res.status(200).json(response);
    }
  } catch (err) {
    next(err);
  }
});

router.post(
  '/',
  validationHandler(createPortfolioSchema),
  async (req, res, next) => {
    try {
      const data = await portfolioService.savePortfolio(req.body);
      const response = new ResponseBase();
      response.message = 'Portfolio was saved succesfuly';
      response.statusCode = 200;
      response.data = data;
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  '/',
  validationHandler(updatePortfolioSchema),
  async (req, res, next) => {
    try {
      const response = new ResponseBase();
      const data = await portfolioService.putPortfolio(req.body);
      if (data) {
        response.message = 'Portfolio was updated successfuly';
        response.statusCode = 200;
        response.data = req.body;
        res.status(200).json(response);
      } else {
        response.message = 'Portfolio doesnt exist';
        response.statusCode = 401;
        response.data = req.body.id;
        res.status(401).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = new ResponseBase();
    const data = await portfolioService.deletePortfolio(id);
    if (data) {
      response.message = 'Portfolio was deleted successfuly';
      response.statusCode = 200;
      response.data = id;
      res.status(200).json(response);
    } else {
      response.message = 'Portfolio doesnt exists';
      response.statusCode = 400;
      response.data = id;
      res.status(400).json(response);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
