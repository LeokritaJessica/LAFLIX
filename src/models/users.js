//Import dependencies
const mongoose = require("mongoose");
const Reviews = require("./reviews");
const Schema = mongoose.Schema;

//Table
const userSchema = new Schema({
  photo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: "Email address is required",
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  fullname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Reviews,
    },
  ],
  roles: {
    type: String,
    default: "basic",
    enum: ["basic", "admin", "user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'users'
});

//Export modules
module.exports = mongoose.model("User", userSchema);
