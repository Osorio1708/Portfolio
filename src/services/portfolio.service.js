const DynamodbService = require('../services/dynamodb.service');
const uuid = require('uuid');
class PortfolioService {
  constructor() {
    this.dynamoDBService = new DynamodbService();
  }
  async postPortfolio(data) {
    data.id = uuid.v4();
    await this.dynamoDBService
      .postPortfolio(data)
      .then()
      .catch((err) => {
        throw err;
      });
    return data;
  }

  async putPortfolio(data) {
    const response = await this.dynamoDBService
      .putPortfolio(data)
      .then()
      .catch((err) => {
        throw err;
      });
    return response;
  }

  async getPorfolioList() {
    const list = [];
    const portfolios = await this.dynamoDBService
      .getAllPortfolios()
      .then((element) => {
        for (let i = 0; i < element.Items.length; i++) {
          const { id, email, name } = element.Items[i];
          list.push({ id, email, name });
        }
        return list;
      })
      .catch((err) => {
        throw err;
      });
    return portfolios;
  }

  async getPortfolioById(id) {
    const portfolio = await this.dynamoDBService
      .getPortfolioById(id)
      .then((element) => {
        return element;
      })
      .catch((err) => {
        throw err;
      });
    return portfolio;
  }

  async deletePortfolio(id) {
    await this.dynamoDBService
      .deletePorfolioById(id)
      .then()
      .catch((err) => {
        throw err;
      });
    return id;
  }
}

module.exports = PortfolioService;
