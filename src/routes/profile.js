//Import dependencies
const router = require("express").Router();

//Controller
const profileController = require("../controllers/profile")
const reviewController = require("../controllers/review");

//Middleware
const uploadPhotoMiddleware = require("../middlewares/uploadPhoto");
const authMiddleware = require("../middlewares/auth");
const roleMiddleware = require("../middlewares/role");

//Routes
router.get(
  "/profile/history",
  authMiddleware.validateToken,
  roleMiddleware.user,
  reviewController.browse
);

router.post(
  "/profile/upload",
  authMiddleware.validateToken,
  uploadPhotoMiddleware.single("photo"),
  roleMiddleware.user,
  profileController.upload,
);
//Module exports
module.exports = router;
