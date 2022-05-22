const twitter = require('twitter');
const { TwitterResponse } = require('../models/response.model');

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
    const twits = [];
    let response = [];
    response = await this.client
      .get('statuses/user_timeline', this.params)
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          const twitterResponse = new TwitterResponse();
          twitterResponse.userName = response[i].user.name;
          twitterResponse.text = response[i].text;
          twitterResponse.screenName = response[i].user.screen_name;
          twitterResponse.profileImageUrl = response[i].user.profile_image_url;
          twitterResponse.date = response[i].created_at;
          twits.push(twitterResponse);
        }
        return twits;
      })
      .catch((err) => {
        throw err;
      });
    return response;
  }
}

module.exports = TwitterService;
