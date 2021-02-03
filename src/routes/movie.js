//Import dependencies
const router = require("express").Router();

//Controller
const movieController = require("../controllers/movie");

//Middleware
const uploadMovieMiddleware = require("../middlewares/uploadMovie")
const authMiddleware = require("../middlewares/auth");
const movieMiddleware = require("../middlewares/movie");
const roleMiddleware = require("../middlewares/role")

//Routes
router.get("/movies", movieController.browse);

router.post(
  "/movies",
  authMiddleware.validateToken,
  movieMiddleware.add,
  movieController.add
  );

//Upload Poster movie
router.post(
  "/movies/:movieId/upload",
  authMiddleware.validateToken,
  uploadMovieMiddleware.single("poster"),
  movieController.upload
);

router.put(
  "/movies/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  movieMiddleware.edit,
  movieController.edit
);
router.delete(
  "/movies/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  movieController.delete
);

//Search Movies for Public
router.get("/search/:title", movieController.search);

//Search Categories for Public
router.get("/categories/:categoryId/movies", movieController.browseByCat)

//Module exports
module.exports = router;
