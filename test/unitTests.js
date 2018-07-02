const chai = require('chai');
const { expect } = require('chai');
const chaiHTTP = require('chai-http');
const db = require('../database/postgresdb');


chai.use(chaiHTTP);

describe('Endpoint testing', () => {
  let server;
  before(() => {
    server = require('../server/app');
  });

  after(() => {
    process.exit();
  });

  it('GET should return a 200 status code', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });

  it('GET should return a type string', (done) => {
    chai.request(server)
      .get('/restaurant/1/2018-06-30')
      .end((error, response) => {
        expect(response.body.time).to.be.a('string');
        done();
      });
  });

  it('PUT should return a 202 status code', (done) => {
    chai.request(server)
      .put('/restaurant/3/8:30 PM')
      .end((error, response) => {
        expect(response).to.have.status(202);
        done();
      });
  });
});
