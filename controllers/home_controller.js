module.exports.home = function(req, res) {
    console.log(req.cookies)
    res.cookie('User_id ',23);
    return res.render('home',{
          title: "Home"
      })
}

//module.exports.actionName = function(req,res);