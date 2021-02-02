//Import dependencies
const router = require("express").Router();

//Controller
const movieController = require("../controllers/movie");

/**Router Saat munuju halaman website lansung menampilkan seluruh film */
router.get("/", movieController.browse);

/**Router untuk serach bar pada website */
router.get("/search/:title", movieController.search);

//Module exports
module.exports = router;
