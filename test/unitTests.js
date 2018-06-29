const expect  = require('chai').expect;
const request = require('request');

it('GET should return a 200 status code ', (done) => {
  request('http://localhost:3001', (error, response) => {
    expect(response.status).to.equal(200);
    done();
  });
});
