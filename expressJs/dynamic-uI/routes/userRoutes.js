const path = require("path");
const rootDir = require("../utils/pathUtils");

const express = require('express');

const homeRoutes = express.Router();

homeRoutes.get('/add-home',(req,res,next)=>{
    res.render("addHome");

})

const homes = [];


homeRoutes.post('/add-home',(req,res,next)=>{
    // console.log("Request body:", req.body);
    homes.push({home:req.body});
    res.render("homeAdded",{home:homes});

})

module.exports = homeRoutes;
module.exports.homes = homes;