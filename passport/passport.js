const passport = require('passport');
const localStrategy = require('passport-local');
const userData = require('../users/users');

passport.use('login', new localStrategy({

    usernameField: 'email',
    passwordField: 'password'
  },

  (email, password, done)=>{

    //check if user exist
    let userExist = userData.find(user=>(user.email===email && user.password===password));

    //user exist
    if(userExist){
        return done(null, userExist, {
            message:'login succssful',
            error:null
        });
    }
    else{//user does not exist
        return done(null, false,{
            message:'user not found',
            error:null
        });
    }
}));

module.exports = passport;