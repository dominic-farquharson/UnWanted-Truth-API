// importing express
const express = require('express');
// invoking express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const time = function(req, res, next){
    // time of request - adding to req object
    req.time = new Date();
    console.log('time', req.time)

    return next();
};

// importing routes
const apiRoutes = require('./routes/api');

// cors - enabling for all request
app.use(cors());

// Views
app.set('views', path.join(__dirname, 'views'));

// body Parser - parse json - populate req.body
// allows retrieval of data from a POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
    res.send('root page');
});

// mounting on api path
app.use('/api', time);
app.use('/api', apiRoutes);


// Handling 404 pages
app.get('*', function(req, res) {
    res.status(404).json({message: 'That page does not exist'})
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`);
})