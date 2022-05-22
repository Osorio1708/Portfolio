const express = require('express');
const validationHandler = require('../middlewares/validationHandler');
const {
  updatePortfolioSchema,
  createPortfolioSchema,
} = require('../schemas/portfolio.schema');
const router = express.Router();

router.get('/list', (req, res) => {

});
router.get('/:id', (req, res, next) => {});
router.post('/', validationHandler(createPortfolioSchema), (req, res) => {});
router.put('/:id',validationHandler(updatePortfolioSchema), (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
