var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var apiRouter = require('./api');
var privateRouter = require('./private');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// this is called mounting. when ever a req comes in for
// '/api' we want to use this router
app.use('/api', apiRouter);
app.use('/private', privateRouter);


app.use(function(err, req, res, next) {
    if (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
});



app.listen(3000);
console.log('on port 3000');
