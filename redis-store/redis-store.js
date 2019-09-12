const session = require('express-session');
const redis = require('redis');

const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

let store = new RedisStore({client:redisClient});

redisClient.on('error', console.error);

module.exports = store;