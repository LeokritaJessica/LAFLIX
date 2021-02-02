//Import dependencies
const router = require("express").Router();

//Controller
const authController = require("../controllers/auth");

//Middleware
const authMiddleware = require("../middlewares/auth");
const uploadS3Middleware = require("../middlewares/uploadS3")

//Routes
router.post("/login",authMiddleware.validateLogin, authController.login);
router.post("/register", uploadS3Middleware.single('photo'),authController.register);

//Module exports
module.exports = router;
