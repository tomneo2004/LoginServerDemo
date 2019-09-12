const express  = require('express');
const bodyParser = require('body-parser');
const session = require('./session/session');

const app = express();

app.use(session);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Server is working and your session id is '+req.sessionID);
})

app.listen(3000, ()=>{
    console.log('Login demo server started !!!');
})