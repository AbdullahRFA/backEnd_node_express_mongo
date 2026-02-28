const path = require("path");
const rootDir = require("../utils/pathUtils");
const express = require('express');
const homeControllers = require("../controllers/home");

const homeRoutes = express.Router();

homeRoutes.get('/',homeControllers.hompage)
homeRoutes.get('/booked-homes',homeControllers.bookedHomes)

module.exports = homeRoutes;