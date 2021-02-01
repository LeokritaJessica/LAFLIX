//Import data
const { where } = require("../models/users");
const userModel = require("../models/users");

//Module exports
module.exports = {
  findEmail: async (email) => {
    return await userModel.findOne({email})
  },
  register: async (userData) => {
    //Create new user
    const user = new userModel(userData);
    return await user.save();
  },
};
