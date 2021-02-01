//Import data
const movieModel = require("../models/movies");

//Module exports
module.exports = {
  find: async () => {
    return await movieModel.find().limit(10);
  },
  add: async (movieData) => {
    //Create new movie
    const movie = new movieModel(movieData);
    return await movie.save();
  },
  edit: async (id, movieData) => {
    return await movieModel.findByIdAndUpdate(id, movieData);
  },
  delete: async (id) => {
    return await movieModel.findByIdAndDelete(id);
  },
};
