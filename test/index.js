var supertest = require("supertest");
const should = require("should");

// This agent refers to PORT where the program is running.

const server = supertest.agent("http://localhost:4001");

// UNIT test begin

describe("SAMPLE unit test", () => {

  // #1 should return home page
  it("should return home page", (done) => {
    // calling home page
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end((err,res) => {
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});