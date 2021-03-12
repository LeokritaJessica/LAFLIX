//Import dependencies
const mongoose = require("mongoose");
const reviews = require("./reviews");
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
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
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
      enum: ["admin", "user"],
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

userSchema.post("delete", (user) => {
  reviews.deleteMany({ _id: { $in: user.reviews } });
});

//Export modules
module.exports = mongoose.model("users", userSchema);
