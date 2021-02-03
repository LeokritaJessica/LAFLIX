//Import data
const reviewModel = require("../models/reviews");
const movieModel = require("../models/movies");
const userModel = require("../models/users");

//Module exports
module.exports = {
  find: async () => {
    return await reviewModel.find().limit(10);
  },
  findByUserId: async (userId, movieId) => {
    return await reviewModel.findOne({ user: userId, movie: movieId });
  },
  findByMovieId: async (movieId, page) => {
    return await reviewModel
      .find({ movie: movieId })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  history: async (userId, page) => {
    return await reviewModel
      .find({ user: userId })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },

  add: async (movieId, userId, reviewData) => {
    //Create new review
    const user = await userModel.findById(userId);
    const movie = await movieModel.findById(movieId);
    const review = new reviewModel(reviewData);

    movie.reviews.push(review);
    user.reviews.push(review);

    await movie.save();
    await user.save();
    return await review.save();
  },
  edit: async (id, reviewData) => {
    //Create new review
    return await reviewModel.findByIdAndUpdate(id, reviewData, { new: true });
  },
  delete: async (id) => {
    return await reviewModel.findByIdAndDelete(id);
  },
};
