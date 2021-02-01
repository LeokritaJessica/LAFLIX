//Import dependencies
const router = require("express").Router();

//Controller
const userController = require("../controllers/user");

//Middleware
const authMiddleware = require("../middlewares/auth");

//Routes
router.get("/users", authMiddleware.validateToken, userController.browse);
router.get("/users/:id", authMiddleware.validateToken, userController.read);
router.put("/users/:id", authMiddleware.validateToken, userController.edit);
router.delete("/users/:id", authMiddleware.validateToken, userController.delete);

//Module exports
module.exports = router;
