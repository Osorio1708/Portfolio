const twitter = require('twitter');
const { config } = require('../config/config');
class TwitterService {
  constructor() {
    this.client = new twitter({
      consumer_key: config.twitter.consumerKey,
      consumer_secret: config.twitter.consumerSecret,
      access_token_key: config.twitter.accessTokenKey,
      access_token_secret: config.twitter.accessTokentSecret,
    });
    this.params = { screen_name: 'nodejs' };
  }
  async getTimeline() {
    const response = await this.client

      .get('statuses/user_timeline', this.params)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
    response.forEach((element) => {
      console.log(element);
    });
  }
}

module.exports = TwitterService;
