//Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//Import routes
const router = require('./src/routes')

//Import data
const { PORT } = process.env;
const db = require("./src/config/database");

//Express
const app = express();

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use(router.usersRoutes);
app.use(router.authRoutes);
app.use(router.reviewRoutes);
app.use(router.moviesRoutes);
app.use(router.categoriesRoutes);

//Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
