const path = require("path");
const rootDir = require("../utils/pathUtils");
const express = require('express');

const homeRoutes = express.Router();

homeRoutes.get('/',(req,res,next)=>{
    res.render("home");
})

module.exports = homeRoutes;