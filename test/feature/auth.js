const faker = require('faker');

function create(){
  return{
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    username: faker.name.firstName(),
    fullname: faker.name.findName(),
    
  }
}

//Module export
module.exports = {
  create
}