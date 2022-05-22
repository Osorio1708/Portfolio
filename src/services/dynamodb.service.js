const AWS = require('aws-sdk');
const { config } = require('../config/config');

class DynamoDBService {
  constructor() {
    AWS.config.update({
      region: config.dynamoDB.region,
      accessKeyId: config.dynamoDB.accessKeyId,
      secretAccessKey: config.dynamoDB.secretAccessKey,
    });
    this.dynamoClient = new AWS.DynamoDB.DocumentClient();
    this.tableName = 'portfolio';
  }
  async getAllPortfolios() {
    const params = {
      TableName: this.tableName,
    };
    return await this.dynamoClient.scan(params).promise();
  }
  async getPortfolioById(id) {
    const params = {
      TableName: this.tableName,
      Key: {
        id,
      },
    };
    return await this.dynamoClient.get(params).promise();
  }
  async postPortfolio(portfolio) {
    const params = {
      TableName: this.tableName,
      Item: portfolio,
    };
    await this.dynamoClient
      .put(params)
      .promise()
      .catch((err) => {
        throw err;
      });
  }
  async putPortfolio(portfolio) {
    let flag = this.portfolioExists(portfolio.id);
    if (flag) {
      const params = {
        TableName: this.tableName,
        Item: portfolio,
      };
      await this.dynamoClient.put
        .put(params)
        .promise()
        .catch((err) => {
          throw err;
        });
      return flag;
    }
    return flag;
  }

  async deletePorfolioById(id) {
    let flag = this.portfolioExists(id);
    if(flag){
      const params = {
        TableName: this.tableName,
        Key: {
          id,
        },
      };
      await this.dynamoClient.delete(params).promise();
      return flag;
    }
    return flag;
  }

  async portfolioExists(id) {
    const list = await this.getAllPortfolios();
    for (let i = 0; i < list.Items.length; i++) {
      if (list.Items[i].id === id) {
        return true;
      }
    }
    return false;
  }
}
module.exports = DynamoDBService;
