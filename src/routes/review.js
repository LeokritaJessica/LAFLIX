//Import dependencies
const router = require("express").Router();

//Controller
const reviewController = require("../controllers/review");

//Middleware
const authMiddleware = require("../middlewares/auth");
const reviewMiddleware = require("../middlewares/review");
const roleMiddleware  = require("../middlewares/role")

//Routes
router.get(
  "/movies/:movieId/reviews",
  reviewController.browse
);

router.post(
  "/movies/:movieId/reviews",
  authMiddleware.validateToken,
  roleMiddleware.user,
  reviewMiddleware.add,
  reviewController.add
);

router.put(
  "/movies/:movieId/reviews/:reviewId",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  reviewMiddleware.edit,
  reviewController.edit
);

// router.delete(
//   "/review/:id",
//   authMiddleware.validateToken,
//   reviewController.delete
// );

//Module exports
module.exports = router;
