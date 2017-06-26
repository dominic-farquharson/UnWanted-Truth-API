const fetch = require('node-fetch');
const moment = require('moment');

const controller = {};

controller.index = (req, res) => {
    res.render('index', {title: 'API Home'});
    // res.status(200).send(`<h1>Api home page </h1>`);
};


// Astronomy Pic of the Day
controller.apod = (req, res) => {
    // adding date param to request articles from different dates
    const date = req.query.date || '';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&hd=true&date=${date}`;
    console.log('url', url)
    fetch(url)
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(error => res.status(404).send({message: 'Error', error}))
};

// Near Earth Objects
controller.neo = (req ,res) => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.API_KEY}&size=5`;
    const date = moment().format("YYYY-MM-DD");

    fetch(url)
        .then(response => response.json())
        .then(response => res.json({data:response, date}))
        .catch(error => res.status(404).send({message: 'Error', error}))    
}

module.exports = controller;