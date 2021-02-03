//Import dependencies
const mongoose = require("mongoose");
const reviews = require("./reviews");

//Import data
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default: 'poster',
    },
    ratingAverage: {
      type: Number,
      default: 1,
      min: [1, 'Rating must be above 1.0'],
      max: [10, 'Rating must be below 10.0'],
      set: val => Math.round(val * 10)/10
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
    duration: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    tag: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: reviews,
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
    toJSON: {
      virtuals: true,
    }
  }
);

movieSchema.post("delete", (movie) => {
  reviews.deleteMany({ _id: { $in: movie.reviews } });
});

//Module export
module.exports = mongoose.model("Movie", movieSchema);
