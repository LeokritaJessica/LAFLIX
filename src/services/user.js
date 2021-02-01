//Import data
const userModel = require("../models/users");

//Module exports
module.exports = {
  find: async () => {
    return await userModel.find().limit(10);
  },
  findId: async (id) => {
    return await userModel.findById(id);
  },
  edit: async (id, userData) => {
    return await userModel.findByIdAndUpdate(id, userData);
  },
  delete: async (id) => {
    return await userModel.findByIdAndDelete(id);
  },
};
