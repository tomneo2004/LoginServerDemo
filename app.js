const express  = require('express');
const bodyParser = require('body-parser');
const session = require('./session/session');
const passport = require('./passport/passport');
const passportAuth = require('./passport/passportAuth');

const app = express();

app.use(session);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());

app.get('/', (req, res)=>{
    res.send('Server is working and your session id is '+req.sessionID);
})

app.post('/login', passportAuth.userAuth);

app.listen(3000, ()=>{
    console.log('Login demo server started !!!');
})