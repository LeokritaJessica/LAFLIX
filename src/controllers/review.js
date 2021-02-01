//Import data
const reviewService = require("../services/review");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    try {
      const review = await reviewService.find();

      res.status(200).send({ data: review });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;

    //Create new comment
    const reviewData = {...body};

    try {
      const savedReview = await reviewService.add(reviewData);
      res.send(savedReview);
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
