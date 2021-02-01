//Import dependencies
const router = require("express").Router();

//Controller
const authController = require("../controllers/auth");

//Middleware
const authMiddleware = require("../middlewares/auth");

//Routes
router.post("/login",authMiddleware.validateLogin, authController.login);
router.post("/register",authMiddleware.validateRegister,authController.register);

//Module exports
module.exports = router;
