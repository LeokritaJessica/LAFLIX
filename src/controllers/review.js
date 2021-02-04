//Import data
const reviewService = require("../services/review");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    const { movieId } = req.params;
    // destructure page and limit and set default values
    const { page = 1 } = req.query;
    //get total documents
    const pageInfo = await reviewService.getPagination(page);

    try {
      const review = await reviewService.findByMovieId(movieId, page);

      res.status(200).send({ data: review, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  history: async (req, res) => {
    const { user } = req;
    // destructure page and limit and set default values
    const { page = 1 } = req.query;

    try {
      const review = await reviewService.history(user._id, page);

      res.status(200).send({ data: review });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  add: async (req, res) => {
    const { body, user } = req;
    const { movieId } = req.params;

    //Check already create new review
    const oldReview = await reviewService.findByUserId(user._id, movieId);
    if (oldReview)
      return res.status(400).send("You already create this movie review");

    //Create new comment
    const reviewData = { ...body, movie: movieId, user: user._id };

    // try {
      const savedReview = await reviewService.add(
        movieId,
        user._id,
        reviewData
      );
      res
        .status(200)
        .send({ message: "Add review Success", data: savedReview });
    // } catch (err) {
      // res.status(400).json({ error: err });
    // }
  },
  edit: async (req, res) => {
    const { movieId, reviewId } = req.params;
    const { body } = req;
    //Create new comment
    const reviewData = { ...body };

    try {
      const updateReview = await reviewService.edit(
        movieId,
        reviewId,
        reviewData
      );
      res
        .status(200)
        .send({ message: "Update review Success", data: updateReview });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteReview = await reviewService.delete(id);

      res
        .status(200)
        .send({ message: "Delete review Success", data: deleteReview });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
