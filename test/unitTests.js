const chai = require('chai');
const { expect } = require('chai');
const chaiHTTP = require('chai-http');
const db = require('../database/postgresdb');
const server = require('../server/app');


chai.use(chaiHTTP);

describe('GET request endpoint testing', () => {
  it('Should return a 200 status code', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
});
