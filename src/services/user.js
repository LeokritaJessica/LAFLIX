//Import data
const userModel = require("../models/users");

//Module exports
module.exports = {
  find: async (page) => {
    return await userModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  findId: async (id) => {
    return await userModel.findById(id);
  },
  edit: async (id, userData) => {
    return await userModel.findByIdAndUpdate(id, userData, { new: true });
  },
  delete: async (id) => {
    return await userModel.findByIdAndDelete(id);
  },
  getPagination: async (page) => {
    const totalItem = await userModel.countDocuments();
    const activePage = page;
    const totalPage = Math.ceil(totalItem / 10);

    return { totalItem, activePage, totalPage };
  },
};
