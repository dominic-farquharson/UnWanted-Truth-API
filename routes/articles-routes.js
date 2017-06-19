const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/articles-controller');

router.get('/', articlesController.all);
router.get('/:id', articlesController.one);

module.exports = router;

