const express = require('express');
const router = express.Router();

const TwitterService = require('../services/twitter.service');
const twitterService = new TwitterService();

const { ResponseBase } = require('../models/response.model');
const responseBase = new ResponseBase();

router.get('/twits', async (req, res, next) => {
  try {
    responseBase.data = await twitterService.getTimeline();
    responseBase.message = 'Get TimeLine from twitter';
    responseBase.statusCode = 200;
    res.json(responseBase);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
