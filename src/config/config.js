require('dotenv').config();

const config = {
  port: process.env.PORT,
  apiKey: process.env.API_KEY,
  dynamoDB: {
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  twitter: {
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    accessTokenKey: process.env.ACCESS_TOKEN_KEY,
    accessTokentSecret: process.env.ACCESS_TOKEN_SECRET
  }
}

module.exports= { config };
