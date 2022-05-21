const Joi = require('joi');

const tittle = Joi.string().min(3).max(255);

const twitterResponse = Joi.object({
  tittle: tittle,
})

module.exports = {twitterResponse}
