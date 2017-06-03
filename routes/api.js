// setting up
const express = require('express');
const router = express.Router();

const controller = require('../controllers/api-controller');

// mounted on /api - handled by controller's index method
router.get('/', controller.index);

// APOD route (Astronomy Picture of the Day)
router.get('/apod', controller.apod)

// Neo (Near Earth Object)

module.exports = router;