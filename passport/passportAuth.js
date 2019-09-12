const passport = require('passport');

const userAuth = (req, res, next)=>{

    passport.authenticate('login', (err, user, info)=>{

        if(err){
            return res.status(400).json({...{status:'Fail'}, info});
        }

        if(!user){
            return res.status(400).json({...{status:'Fail'}, info});
        }

        return res.status(200).json({...{status:'OK'}, info});


    })(req, res, next);
}

module.exports = {
    userAuth
}