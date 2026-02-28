const homeMOdel = require("../models/home");

exports.HomeAdded = (req,res,next)=>{
    const home = new homeMOdel(req.body.userName, req.body.homeName, req.body.homeAddress, req.body.price, req.body.location);
    home.Save();

    homeMOdel.fetchAll((home)=>{
        res.render("homeAdded",{home:home});
    })

}

exports.getHome =(req,res,next)=>{
    res.render("addHome");
}
