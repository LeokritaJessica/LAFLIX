//Import data
const reviewModel = require("../models/reviews");

//Module exports
module.exports = {
  find: async () => {
    return await reviewModel.find().limit(10);
  },
  add: async (reviewData) =>{
    //Create new review
    const review = new reviewModel(reviewData);
    return await review.save();
  },
  delete: async (id) => {
    return await reviewModel.findByIdAndDelete(id);
  },
};
