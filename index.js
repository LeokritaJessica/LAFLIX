//Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//Import routes
const router = require("./src/routes");

//Import data
const { PORT } = process.env;
const db = require("./src/config/database");

//Express
const app = express();

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cors
app.use(cors());

//Routes
app.use("/api", router.usersRoutes);
app.use("/api", router.authRoutes);
app.use("/api", router.reviewRoutes);
app.use("/api", router.moviesRoutes);
app.use("/api", router.categoriesRoutes);
app.use("/api", router.profileRoutes);

//Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//Module export
module.exports = app