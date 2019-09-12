const passport = require('passport');
const localStrategy = require('passport-local');
const userData = require('../users/users');

passport.use('login', new localStrategy({

    usernameField: 'email',
    passwordField: 'password'
  },

  (email, password, done)=>{

    let userExist = false;

    for(let i=0; i<userData.length; i++){
        
        let user = userData[i];

        if(user.email === email && user.password === password){

            userExist = true;
        }
    }

    if(userExist){
        return done(null, true);
    }
    else{
        return done(null, false);
    }

    return done(null, false);
}));

module.exports = passport;