//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      required: true,
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
