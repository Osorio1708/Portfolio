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
    this.tableNamme = 'portfolio';
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
    const list = this.getAllPortfolios();
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
  }
  async deletePorfolioById(id) {
    const params = {
      TableName: this.tableName,
      Key: {
        id,
      },
    };
    return await this.dynamoClient.delete(params).promise();
  }
}

module.exports = DynamoDBService;
