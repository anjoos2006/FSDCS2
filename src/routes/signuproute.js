const express = require('express'); 
const signupRouter = express.Router();
//const user = require('../data/user');
const userdata = require('../model/UserModel');


signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/",function(req,res){
    
    // var item= {
    //     uid:req.param("uid"),
    //     pwd:req.param("pwd")
    // };
    var item= {
        uid:req.body.uid,
        pwd:req.body.pwd
    };
    console.log(item);
    const userDoc = new userdata(item);
    userDoc.save();
    res.redirect("/login");
});

module.exports = signupRouter;