require('@angular/http');
const Request = require('request');
describe("server", () => {
  let server;
  beforeAll(() => {
    server = require('../server');
  });
  //Test add new activity
  describe('POST /api/add_activity', () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:3000/api/add_activity',
        json: true,
        body: {
          title: 'Een activiteit',
          description: 'Dit is een testbeschrijving',
          location: 'Een locatie',
          organisedBy: 'nicolas.loots@outlook.be',
          date: new Date(1518566400000)
        },
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_USER_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it('return true', () => {
      expect(data.body).toBe(true);
    });
  });
  // Test user login
  describe('POST /user/login', () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:3000/user/login',
        json: true,
        body: {
          username: 'nicolas.loots@outlook.be',
          password: process.env.TEST_USER_PASSWORD
        },
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it('return true', () => {
      expect(data.body.token.length).toBeGreaterThan(0);
    });
  });
  // Test remove activity
  describe('DELETE /api/remove_activity', () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'DELETE',
        uri: 'http://localhost:3000/api/remove_activity',
        json: true,
        headers: {
          activityId: '5a2a5ba43ce5a438e118223a'
        },
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_USER_TOKEN);;
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it('return true', () => {
      expect(data.body).toBe(true);
    });
  });
});
