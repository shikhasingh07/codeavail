const user = require('../models/user');
const User = require('../models/user')

module.exports.profile = function(req, res){
    // res.end('<h1>User Profile</h1>');
    if (req.cookies.user_id){
       User.findById(req.cookies.user_id,function (err,user){
           if(user){
            return res.render('user_profile',{
                title:"User Pro",
                user:user,
            })
           }
           else{
            res.redirect('/user/sign-In');
           }
       })
    }
    else{
        res.redirect('/user/sign-In');
    }
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

module.exports.signOut = function(req, res){
    res.clearCookie('user_id');
    res.redirect('/users/sign-In');
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
module.exports.createSession = function(req, res){
    //find the user in the
User.findOne({email: req.body.email}, function(err,user){
    
    if(err){console.log(`Error in email`)
      return ;
    }
       //handle user found
    if (user){
        if(user.password != req.body.password){
            return res.redirect('back');
        }
        res.cookie('user_id',user.id);
        return res.redirect('/users/profile');
    }
    else{
       // handle user Not Found
       return res.redirect('back');
    }  
    }
)
}
     
    // handle password which don't match the


    
