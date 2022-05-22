const DynamodbService = require('../services/dynamodb.service');
const uuid = require('uuid');
class PortfolioService {
  constructor() {
    this.dynamoDBService = new DynamodbService();
  }
  async postPortfolio(data) {
    try {
      data.id = uuid.v4();
      await this.dynamoDBService.postPortfolio(data);
      return data;
    } catch (err) {
      //
    }
  }

  async putPortfolio(data) {
    try {
      const response = await this.dynamoDBService.putPortfolio(data);
      return response;
    } catch (err) {
      //
    }
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
    try {
      const portfolio = await this.dynamoDBService
        .getPortfolioById(id)
        .then((element) => {
          return element;
        })
        .catch((err) => {
          throw err;
        });
      return portfolio;
    } catch (err) {
      //
    }
  }

  async deletePortfolio(id) {
    try {
      await this.dynamoDBService.deletePorfolioById(id);
      return id;
    } catch (err) {
      //
    }
  }
}

module.exports = PortfolioService;
