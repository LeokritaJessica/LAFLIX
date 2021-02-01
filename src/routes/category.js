//Import dependencies
const router = require("express").Router();

//Controller
const categoryController = require("../controllers/category");

//Middleware
const authMiddleware = require("../middlewares/auth");
const categoryMiddleware = require("../middlewares/category");

//Routes
router.get(
  "/category",
  authMiddleware.validateToken,
  categoryController.browse
);
router.post(
  "/category",
  authMiddleware.validateToken,
  categoryMiddleware.add,
  categoryController.add
);
router.put(
  "/category/:id",
  authMiddleware.validateToken,
  categoryMiddleware.edit,
  categoryController.edit
);
router.delete(
  "/category/:id",
  authMiddleware.validateToken,
  categoryController.delete
);

//Module exports
module.exports = router;
