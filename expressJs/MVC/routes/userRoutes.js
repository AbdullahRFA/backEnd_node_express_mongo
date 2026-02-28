const path = require("path");
const rootDir = require("../utils/pathUtils");

const userControllers = require("../controllers/user");

const express = require('express');

const homeRoutes = express.Router();

homeRoutes.get('/add-home',userControllers.getHome)



homeRoutes.post('/add-home',userControllers.HomeAdded)

module.exports = homeRoutes;