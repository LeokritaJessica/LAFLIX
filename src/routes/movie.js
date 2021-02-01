//Import dependencies
const router = require("express").Router();

//Controller
const movieController = require("../controllers/movie");

//Middleware
const authMiddleware = require("../middlewares/auth");
const movieMiddleware = require("../middlewares/movie");

//Routes
router.get("/movie", movieController.browse);
router.post(
  "/movie",
  authMiddleware.validateToken,
  movieMiddleware.add,
  movieController.add
);
router.put(
  "/movie/:id",
  authMiddleware.validateToken,
  movieMiddleware.edit,
  movieController.edit
);
router.delete(
  "/movie/:id",
  authMiddleware.validateToken,
  movieController.delete
);

//Module exports
module.exports = router;
