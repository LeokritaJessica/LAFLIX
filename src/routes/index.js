//Import Routes
const usersRoutes = require("./user");
const reviewRoutes = require("./review");
const moviesRoutes = require("./movie");
const categoriesRoutes = require("./category");
const authRoutes = require("./auth");
const adminRoutes = require("./admin");

//Module exports
module.exports = {
  usersRoutes,
  reviewRoutes,
  moviesRoutes,
  categoriesRoutes,
  authRoutes,
  adminRoutes,
};
