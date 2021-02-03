//Import data
const reviewModel = require("../models/reviews");
const movieModel = require("../models/movies");
const userModel = require("../models/users");

//Module exports
module.exports = {
  find: async (page) => {
    return await reviewModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
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
    const movie = await movieModel
      .findById(movieId)
      .populate({ path: "reviews" });
    const sum =
      movie.reviews.reduce((a, b) => a + b.rating, 0) +
      parseInt(reviewData.rating);
    const ratingAverage = sum / (movie.reviews.length + 1);
    const review = new reviewModel(reviewData);

    movie.ratingAverage = ratingAverage;
    movie.reviews.push(review);
    user.reviews.push(review);

    await movie.save();
    await user.save();

    return await review.save();
  },
  edit: async (movieId, reviewId, reviewData) => {
    //Create new review
    const update = await reviewModel.findByIdAndUpdate(reviewId, reviewData, {
      new: true,
    });
    const movie = await movieModel
      .findById(movieId)
      .populate({ path: "reviews" });
    const sum = movie.reviews.reduce((a, b) => a + b.rating, 0);
    const ratingAverage = sum / movie.reviews.length;

    movie.ratingAverage = ratingAverage;
    await movie.save();
    return update;
  },
  delete: async (id) => {
    return await reviewModel.findByIdAndDelete(id);
  },
  getPagination: async (page) => {
    const totalItem = await reviewModel.countDocuments();
    const activePage = page;
    const totalPage = Math.ceil(totalItem / 10);

    return { totalItem, activePage, totalPage };
  },
};
