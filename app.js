const express  = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');


const app = express();

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

redisClient.on('error', console.error);

const sessConfig = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true, 
        secure: false,
    },
    store:new RedisStore({client:redisClient, ttl:3 })
}

app.use(session(sessConfig));

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