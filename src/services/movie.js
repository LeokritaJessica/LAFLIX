//Import data
const movieModel = require("../models/movies");
const categoryModel = require("../models/categories")

//Module exports
module.exports = {
  find: async (page) => {
    return await movieModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  findByCat: async (categoryId, page) => {
    return await movieModel
      .find({ category: categoryId })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  add: async (movieData, categoryId) => {
    //Create new movie
    const category = await categoryModel.findById(categoryId);
    const movie = new movieModel(movieData);

    category.movies.push(movie);
    await category.save();
    return await movie.save();
  },
  edit: async (id, movieData) => {
    return await movieModel.findByIdAndUpdate(id, movieData, { new: true });
  },
  delete: async (id) => {
    return await movieModel.findByIdAndDelete(id);
  },
  search: async (title) => {
    return await movieModel.find({ title: { $regex: title, $options: "$i" } });
  },
  upload: async (movieId, uploadFile) => {
    return await movieModel.findByIdAndUpdate(movieId, uploadFile, { new: true });
  },
};
