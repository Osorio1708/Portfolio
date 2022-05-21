const express = require('express');
const router = express.Router();

const TwitterService = require('../services/twitter.service')
const twitterService = new TwitterService();

router.get('/', async (req, res) => {
  try {
    const timeLine = await twitterService.getTimeline();
    res.json(timeLine);
  } catch (err) {
    // next(err);
  }
});

module.exports = router;
