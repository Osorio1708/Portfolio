const joi = require('joi');

const id = joi.string();
const name = joi.string();
const names = joi.string();
const phone = joi.string();
const zip_code = joi.string();
const description = joi.string();
const image_url = joi.string();
const twitter_user_name = joi.string();
const tittle = joi.string();
const address = joi.string();
const email = joi.string();
const experience_01 = joi.string();
const experience_02 = joi.string();
const experience_03 = joi.string();
const profile = joi.string();

const updatePortfolioSchema = {
id : id.required(),
name: name,
names: names,
phone: phone,
zip_code: zip_code,
description: description,
image_url: image_url,
twitter_user_name: twitter_user_name,
tittle: tittle,
address: address,
email: email,
experience_01: experience_01,
experience_02: experience_02,
experience_03: experience_03,
profile: profile,
}

const createPortfolioSchema = {
  name: name.required(),
  names: names,
  phone: phone.required(),
  zip_code: zip_code,
  description: description,
  image_url: image_url.required(),
  twitter_user_name: twitter_user_name,
  tittle: tittle,
  address: address,
  email: email.required(),
  experience_01: experience_01,
  experience_02: experience_02,
  experience_03: experience_03,
  profile: profile,
  }

module.exports = { updatePortfolioSchema, createPortfolioSchema };
