//Import dependencies
const mongoose = require("mongoose");

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
        ref: "reviews",
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

// movieSchema.virtual('rating').get( function() {
//   const sum = this.reviews.reduce((a, b)=> a+b, 0)
//   return (sum/this.reviews.length)|| 0
  
// })

//Module export
module.exports = mongoose.model("Movie", movieSchema);
