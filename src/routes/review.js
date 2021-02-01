//Import dependencies
const router = require("express").Router();

//Controller
const reviewController = require("../controllers/review");

//Middleware
const authMiddleware = require("../middlewares/auth");
const reviewMiddleware = require("../middlewares/review");

//Routes
router.get(
  "/review",
  authMiddleware.validateToken,
  reviewController.browse
);
router.post(
  "/review",
  authMiddleware.validateToken,
  reviewMiddleware.add,
  reviewController.add
);
router.delete(
  "/review/:id",
  authMiddleware.validateToken,
  reviewController.delete
);

//Module exports
module.exports = router;
