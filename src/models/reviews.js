//Import dependencies
const mongoose = require("mongoose");
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
      ref: "movies",
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

//Module export
module.exports = mongoose.model("Review", reviewsSchema);
