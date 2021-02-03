//Import dependencies
const mongoose = require("mongoose");
const users = require("./users");
const movies = require("./movies");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: movies,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "reviews",
  }
);

// reviewsSchema.post("findByIdAndDelete", async (review) => {
//   await users.updateOne(review.user, {
//     $pull: { reviews: review._id },
//   });
//   await movies.updateOne(review.movie, {
//     $pull: { reviews: review._id },
//   });
// });

//Module export
module.exports = mongoose.model("Review", reviewsSchema);
