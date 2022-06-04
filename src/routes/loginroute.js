const express = require('express'); 
const loginRouter = express.Router();
//const user = require('../data/user');
const userdata = require('../model/UserModel');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})

//** CS2 P2 ** Changing to fetch data from the userdatas collection */
loginRouter.post("/",function(req,res){
       
    console.log("check",req.body);
    var flag=false;

    userdata.findOne({uid:req.body.uid},function(err,result){
        if (err) {
            console.log(err);
            res.send({error: "An error has occurred"});
          } else {
            if (result == null) {
              res.send({"error": "This email address is not recognised, please check you have entered your email correctly"});
            } 
            else {
              console.log("Email recognised");
                        
              if (req.body.pwd !== result.pwd){
                res.send({"error":"Sorry your password is incorrect"});
              } else {
                res.redirect("/home")
              };
            }
          }
    });
        

// if(flag==true){
//     // alert("User Verified.Click to continue");
//     res.redirect("/home")
// }
// else{
//     // alert("User Verification Failed");
//     res.redirect("/signup");
// }

});




module.exports = loginRouter;