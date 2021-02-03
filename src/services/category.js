//Import data
const categoryModel = require("../models/categories");

//Module exports
module.exports = {
  find: async (page) => {
    return await categoryModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  add: async (categoryData) => {
    //Create new category
    const category = new categoryModel(categoryData);
    return await category.save();
  },
  edit: async (id, categoryData) => {
    return await categoryModel.findByIdAndUpdate(id, categoryData, {
      new: true,
    });
  },
  delete: async (id) => {
    return await categoryModel.findByIdAndDelete(id);
  },
  getPagination: async (page) => {
    const totalItem = await categoryModel.countDocuments();
    const activePage = page;
    const totalPage = Math.ceil(totalItem / 10);

    return { totalItem, activePage, totalPage };
  },
};
