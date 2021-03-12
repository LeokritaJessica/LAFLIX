//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies",
      },
    ],
    category: {
      type: String,
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
    collection: "categories",
  }
);

//Module export
module.exports = mongoose.model("categories", categorySchema);
