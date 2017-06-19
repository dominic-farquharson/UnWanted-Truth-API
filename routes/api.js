// setting up
const express = require('express');
const router = express.Router();

const controller = require('../controllers/api-controller');


// mounted on /api - handled by controller's index method
router.get('/', controller.index);
router.post('/', (req, res)=> {
    console.log('req.body', req.body)
    res.json({body: req.body});
})

// APOD route (Astronomy Picture of the Day)
router.get('/apod', controller.apod);

// Neo (Near Earth Object)
router.get('/neo', controller.neo);



module.exports = router;