const express = require('express');
const validationHandler = require('../middlewares/validationHandler');
const {
  updatePortfolioSchema,
  createPortfolioSchema,
} = require('../schemas/portfolio.schema');
const PortfolioService = require('../services/portfolio.service');
const portfolioService = new PortfolioService();
const { ResponseBase } = require('../models/response.model');

const router = express.Router();

router.get('/list', async (req, res) => {
  const response = new ResponseBase();
  const data = await portfolioService.getPorfolioList();
  response.message = 'Get Portfolio List';
  response.statusCode = 200;
  response.data = data;
  res.status(200).json(response);
});

router.get('/:id', async (req, res, next) => {
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
});

router.post('/', validationHandler(createPortfolioSchema), async (req, res) => {
  const data = await portfolioService.savePortfolio(req.body);
  const response = new ResponseBase();
  response.message = 'Portfolio was saved succesfuly';
  response.statusCode = 200;
  response.data = data;
  res.status(200).json(response);
});

router.put('/', validationHandler(updatePortfolioSchema), async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
