const session = require('express-session');
const store = require('../redis-store/redis-store');

const sessConfig = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true, 
        secure: false,
    },
    store:store
}

let newSession = session(sessConfig);

module.exports = newSession;