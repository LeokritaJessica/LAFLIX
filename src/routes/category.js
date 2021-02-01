//Import dependencies
const router = require("express").Router();

//Controller
const categoryController = require("../controllers/category");

//Middleware
const authMiddleware = require("../middlewares/auth");
const categoryMiddleware = require("../middlewares/category");

//Routes
router.get(
  "/movie",
  authMiddleware.validateToken,
  categoryController.browse
);
router.post(
  "/movie",
  authMiddleware.validateToken,
  categoryMiddleware.add,
  categoryController.add
);
router.put(
  "/movie/:id",
  authMiddleware.validateToken,
  categoryMiddleware.edit,
  categoryController.edit
);
router.delete(
  "/movie/:id",
  authMiddleware.validateToken,
  categoryController.delete
);

//Module exports
module.exports = router;
