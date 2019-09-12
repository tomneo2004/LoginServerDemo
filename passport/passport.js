const passport = require('passport');
const localStrategy = require('passport-local');
const userData = require('../users/users');

passport.use('login', new localStrategy({

    usernameField: 'email',
    passwordField: 'password'
  },

  (email, password, done)=>{

    let userExist = userData.find(user=>(user.email===email && user.password===password));

    if(userExist){
        return done(null, userExist, {
            message:'login succssful',
            error:null
        });
    }
    else{
        return done(null, false,{
            message:'user not found',
            error:null
        });
    }
}));

module.exports = passport;