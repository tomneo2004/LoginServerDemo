const passport = require('passport');

const userAuth = (req, res, next)=>{

    passport.authenticate('login', (err, user, info)=>{

        if(err){
            return res.status(400).json({status:'Fail', message:err});
        }

        if(!user){
            return res.status(400).json({status:'Fail', message:'user does not exist'});
        }

        return res.status(200).json({status:'OK', message:'login successful'});


    })(req, res, next);
}

module.exports = {
    userAuth
}