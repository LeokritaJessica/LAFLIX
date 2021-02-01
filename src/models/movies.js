//Import dependencies
const mongoose = require("mongoose");
const Category = require("./categories");
const Reviews = require("./reviews");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    starring: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
      },
    ],
    tag: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Reviews,
      },
    ],
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
    collection: "movies",
  }
);

//Module export
module.exports = mongoose.model("Movie", movieSchema);
