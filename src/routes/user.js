//Import dependencies
const router = require("express").Router();

//Controller
const userController = require("../controllers/user");

//Middleware
const authMiddleware = require("../middlewares/auth");
const roleMiddleware = require("../middlewares/role")

//Routes
router.get("/users", authMiddleware.validateToken, roleMiddleware.admin, userController.browse);
router.get(
  "/users/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  userController.read
);
router.put(
  "/users/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  userController.edit
);
router.delete(
  "/users/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  userController.delete
);

//Module exports
module.exports = router;
