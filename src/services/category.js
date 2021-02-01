//Import data
const categoryModel = require("../models/categories");

//Module exports
module.exports = {
  find: async () => {
    return await categoryModel.find().limit(10);
  },
  add: async (categoryData) => {
    //Create new category
    const category = new categoryModel(categoryData);
    return await category.save();
  },
  edit: async (id, categoryData) => {
    return await categoryModel.findByIdAndUpdate(id, categoryData);
  },
  delete: async (id) => {
    return await categoryModel.findByIdAndDelete(id);
  },
};
