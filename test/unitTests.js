const { expect } = require('chai');
const request = require('request');

describe('GET request endpoint testing', () => {
  it('Should return a 200 status code', (done) => {
    request('http://localhost:3001/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});