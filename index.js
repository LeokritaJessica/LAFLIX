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
app.use(router.usersRoutes);
app.use(router.authRoutes);
app.use(router.reviewRoutes);
app.use(router.moviesRoutes);
app.use(router.categoriesRoutes);
app.use(router.profileRoutes);

//Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
