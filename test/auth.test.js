const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);
const app = require("../index");

//Import fake data
const feature = require("./feature/auth");
let token = 0;

describe("POST | /api/register | insert new user", async() => {
  const req = feature.create();
  it("it should regis user", (done) => {
    chai
      .request(app)
      .post("/api/register")
      .send(req)
      .end((err, res) => { 
        res.should.have.status(200);
        res.body.should.have.property("email").eql(req.email);
        res.body.should.have.property("username").eql(req.username);
        res.body.should.have.property("fullname").eql(req.fullname);
        done();
      });
  });
});


describe("GET | /api/users | get all users", () => {
  it("it should GET all users", (done) => {
    chai
      .request(app)
      .get("/api/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data[0].should.have.property("photo");
        res.body.data[0].should.have.property("email");
        res.body.data[0].should.have.property("password");
        res.body.data[0].should.have.property("username");
        res.body.data[0].should.have.property("fullname");
        res.body.data[0].should.have.property("roles");
        res.body.should.have.property("totalItem");
        res.body.should.have.property("activePage");
        res.body.should.have.property("totalPage");
        done();
      });
  });
});