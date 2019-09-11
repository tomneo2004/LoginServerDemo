const express  = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res)=>{

    res.send('Server is working');
})

app.listen(3000, ()=>{
    console.log('Login demo server started !!!');
})