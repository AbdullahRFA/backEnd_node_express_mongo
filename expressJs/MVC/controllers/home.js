const homeModel = require("../models/home");
exports.hompage = (req,res,next)=>{
    res.render("home");
}


exports.bookedHomes = (req,res,next)=>{

    homeModel.fetchAll((home)=>{
        res.render("homeAdded",{home:home});
    })


}