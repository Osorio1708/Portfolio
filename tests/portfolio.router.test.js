const app = require('../src/server');
const request = require('supertest');
const { postPortfolioMock, getPorfolioByIdMock } = require('./mocks/portfolio');
const { config } = require('../src/config/config');

describe('GET Portfolio List /api/v1/portfolio/list', () => {
  it('should respond with 200 status code', async () => {
    const response = await request(app)
      .get('/api/v1/portfolio/list')
      .set('apikey', config.apiKey)
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an array', async () => {
    const response = await request(app)
      .get('/api/v1/portfolio/list')
      .set('apikey', config.apiKey)
      .send();
    expect(response._body.data).toBeInstanceOf(Array);
  });
});

describe('GET Portfolio By Id /api/v1/portfolio/id', () => {
  test('should respond with 200 status code', async () => {
    const response = await request(app)
      .get(`/api/v1/portfolio/${getPorfolioByIdMock}`)
      .set('apikey', config.apiKey)
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an Object', async () => {
    const response = await request(app)
      .get(`/api/v1/portfolio/${getPorfolioByIdMock}`)
      .set('apikey', config.apiKey)
      .send();
    expect(response._body.data).toBeInstanceOf(Object);
  });

  test('should respond with an Object contains email as a string', async () => {
    const response = await request(app)
      .get(`/api/v1/portfolio/${getPorfolioByIdMock}`)
      .set('apikey', config.apiKey)
      .send();
    expect(typeof response._body.data.Item.email).toBe('string');
  });

  test('should respond with 400 if portfolio doesnt exists', async () => {
    const response = await request(app)
      .get(`/api/v1/portfolio/0f2f3f0f`)
      .set('apikey', config.apiKey)
      .send();
    expect(response.statusCode).toBe(400);
  });

  describe('GET Portfolio /api/v1/portfolio', () => {
    test('should respond with 200 status code', async () => {
      const response = await request(app)
        .post('/api/v1/portfolio')
        .set('apikey', config.apiKey)
        .send(postPortfolioMock);
      expect(response.statusCode).toBe(200);
    });
    test('should respond with an id field', async () => {
      const response = await request(app)
        .post('/api/v1/portfolio')
        .set('apikey', config.apiKey)
        .send(postPortfolioMock);
      expect(typeof response._body.data.id).toBe('string');
    });
  });
});
