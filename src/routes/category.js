//Import dependencies
const router = require("express").Router();

//Controller
const categoryController = require("../controllers/category");

//Middleware
const authMiddleware = require("../middlewares/auth");
const categoryMiddleware = require("../middlewares/category");
const roleMiddleware = require("../middlewares/role");

//Routes
router.get("/category", categoryController.browse);

router.post(
  "/category",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  categoryMiddleware.add,
  categoryController.add
);
router.put(
  "/category/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  categoryMiddleware.edit,
  categoryController.edit
);
router.delete(
  "/category/:id",
  authMiddleware.validateToken,
  roleMiddleware.admin,
  categoryController.delete
);

//Module exports
module.exports = router;
