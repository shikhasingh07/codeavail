const User = require('../models/user')

module.exports.profile = function(req, res){
    // res.end('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title:"User",
    })
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    });
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

//get the sign Up data 
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){if(err){console.log(`Error in email`)
      return ;}
     if(!user){
         User.create(req.body,function(err){
            if(err){console.log(`Error in creating`)
            return ;}
            return res.redirect('/users/sign-In')
         });
     }else{
        return res.redirect('back');
     }  
    });
}

//get the sing In data and create session 
module.exports.createSession = function(req, res){}