const chai = require('chai');
const { expect } = require('chai');
const chaiHTTP = require('chai-http');
const db = require('../database/postgresdb');

chai.use(chaiHTTP);

describe('GET request endpoint testing', () => {
  it('Should return a 200 status code', (done) => {
    chai.request('http://localhost:3001/')
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
});
