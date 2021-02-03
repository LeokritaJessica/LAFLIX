//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Table
const userSchema = new Schema(
  {
    photo: {
      type: String,
      default: 0,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: 3,
      maxlength: 255,
    },
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
      minlength: 3,
      maxlength: 255,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    roles: {
      type: String,
      default: "user",
      enum: ["superadmin", "admin", "user"],
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
    collection: "users",
  }
);

//Export modules
module.exports = mongoose.model("User", userSchema);
