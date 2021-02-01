//Import Routes
const usersRoutes = require("./user");
const reviewRoutes = require("./review");
const moviesRoutes = require("./movie");
const categoriesRoutes = require("./category");
const authRoutes = require("./auth");

//Module exports
module.exports = {
  usersRoutes,
  reviewRoutes,
  moviesRoutes,
  categoriesRoutes,
  authRoutes
};
